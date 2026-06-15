const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const $ = cheerio.load(html);

const products = [];
$('.prod-item').each((i, el) => {
  const title = $(el).find('.prod-name').text().trim();
  const img = $(el).find('.prod-info img').attr('src');
  const link = $(el).find('a').first().attr('href');
  
  const overlayHtml = $(el).find('.prod-overlay').html() || '';
  
  if (title) products.push({ title, img, link, overlayHtml });
});

fs.writeFileSync('src/app/products/measuring-tapes-data.json', JSON.stringify(products, null, 2));
console.log(`Extracted ${products.length} products with overlay HTML.`);
