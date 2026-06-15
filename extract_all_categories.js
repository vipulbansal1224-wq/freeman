const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');

const categories = [
  "measuring-tapes",
  "spirit-levels",
  "measuring-wheels",
  "test-and-measure-tools",
  "precision-tools",
  "hand-tools",
  "power-tool-accessories"
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function scrapeCategories() {
  const allData = {};

  for (const slug of categories) {
    console.log(`Fetching ${slug}...`);
    let html = '';
    
    if (slug === 'measuring-tapes' && fs.existsSync('measuring-tapes.html')) {
        html = fs.readFileSync('measuring-tapes.html', 'utf8');
    } else {
        html = await fetchHtml(`https://www.freemansgroup.com/product-category/${slug}/`);
    }

    const $ = cheerio.load(html);
    
    // Banner Image
    let bannerImage = '';
    const styleAttr = $('.inner-header').attr('style') || '';
    const match = styleAttr.match(/url\(['"]?(.*?)['"]?\)/);
    if (match) {
        bannerImage = match[1];
    } else {
        // Find inside img if inner-header bg doesn't exist
        const img = $('.banner-section img').attr('src');
        if (img && img.includes('banner')) bannerImage = img;
    }

    // Category Title
    const title = $('.inner-header-wrap h1').text().trim() || slug.replace(/-/g, ' ').toUpperCase();

    // Intro Text
    const introText = $('.page-wrap > div p').first().text().trim() || '';

    // Sidebar Links
    const sidebarLinks = [];
    $('#filter li a').each((i, el) => {
        let linkHref = $(el).attr('href');
        // Convert to local products URL
        if(linkHref) linkHref = linkHref.replace('/product-category/', '/products/');
        sidebarLinks.push({
            text: $(el).text().trim(),
            href: linkHref
        });
    });

    // Products
    const products = [];
    $('.prod-item').each((i, el) => {
      const prodTitle = $(el).find('.prod-name').text().trim();
      const prodImg = $(el).find('.prod-info img').attr('src');
      let prodLink = $(el).find('a').first().attr('href');
      // optional: replace freemansgroup domain with relative path if we wanted local products, but original links are fine for now.
      
      const overlayHtml = $(el).find('.prod-overlay').html() || '';
      
      if (prodTitle) products.push({ title: prodTitle, img: prodImg, link: prodLink, overlayHtml });
    });

    allData[slug] = {
        title,
        bannerImage,
        introText,
        sidebarLinks,
        products
    };
    
    console.log(`Finished ${slug}: ${products.length} products found.`);
  }

  fs.writeFileSync('src/app/products/all-categories-data.json', JSON.stringify(allData, null, 2));
  console.log('Successfully saved to src/app/products/all-categories-data.json');
}

scrapeCategories().catch(console.error);
