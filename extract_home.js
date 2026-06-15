const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('home.html', 'utf8');
const $ = cheerio.load(html);

const items = [];
$('.prod-cat-list .product-cat-item, .prod-categories .product-cat-item, .product-categories li, .product-categories .slick-slide:not(.slick-cloned)').each((i, el) => {
  const title = $(el).find('h4, h3, a').first().text().trim();
  const link = $(el).find('a').attr('href');
  const img = $(el).find('img').attr('src');
  if (title && !items.find(item => item.title === title)) {
    items.push({title, link, img});
  }
});

console.log(JSON.stringify(items, null, 2));
