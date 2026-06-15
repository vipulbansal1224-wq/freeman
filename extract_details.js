const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const $ = cheerio.load(html);

// Find banner
let bannerSrc = '';
// The banner might be an img or background image
$('img').each((i, el) => {
    const src = $(el).attr('src');
    if (src && src.toLowerCase().includes('banner')) {
        bannerSrc = src;
    }
});

if (!bannerSrc) {
    const header = $('.inner-header-wrap').html();
    console.log("Inner header content:", header);
}

console.log("Found banner:", bannerSrc);

const products = [];
$('.prod-item').each((i, el) => {
  const title = $(el).find('.prod-name').text().trim();
  const img = $(el).find('img').attr('src');
  const link = $(el).find('a').first().attr('href');
  
  // The description is usually inside .prod-overlay or .prod-desc
  const desc = $(el).find('.prod-desc, p, .prod-overlay p, .prod-overlay .desc').text().trim() || '';
  const fullHtml = $(el).html();
  
  if (title) products.push({ title, img, link, desc, htmlSnippet: fullHtml.substring(0, 500) });
});

fs.writeFileSync('src/app/products/measuring-tapes-data.json', JSON.stringify(products, null, 2));
console.log(`Extracted ${products.length} products. Look at the first product's HTML snippet for clues.`);
