const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('products.html', 'utf8');
const $ = cheerio.load(html);

console.log('product-categories:', $('.product-categories').length);
console.log('product-cat-item:', $('.product-cat-item').length);
console.log('prod-cat-list:', $('.prod-cat-list').length);
console.log('prod-wrap:', $('.prod-wrap').length);

const items = [];
$('.prod-cat-list .product-cat-item, .prod-categories .product-cat-item, .product-categories li').each((i, el) => {
  const title = $(el).find('h4, h3, a').first().text().trim();
  const link = $(el).find('a').attr('href');
  const img = $(el).find('img').attr('src');
  items.push({title, link, img});
});

console.log(JSON.stringify(items, null, 2));

const allHeaders = [];
$('h1, h2, h3, h4').each((i, el) => allHeaders.push($(el).prop('tagName') + ': ' + $(el).text().trim()));
console.log('Headers:', allHeaders.slice(0, 10));
