const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const $ = cheerio.load(html);

const products = [];
$('.product').each((i, el) => {
  const title = $(el).find('.woocommerce-loop-product__title, h2').text().trim();
  const img = $(el).find('img').attr('src');
  const link = $(el).find('a').attr('href');
  if (title) products.push({ title, img, link });
});

console.log(JSON.stringify(products, null, 2));
