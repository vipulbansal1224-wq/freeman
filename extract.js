const fs = require('fs');
const cheerio = require('cheerio');

const html = fs.readFileSync('products.html', 'utf8');
const $ = cheerio.load(html);

const cats = [];
$('.product-cat-item').each((i, el) => {
  const title = $(el).find('h3').text().trim();
  const link = $(el).find('a').attr('href');
  const img = $(el).find('img').attr('src');
  cats.push({title, link, img});
});

console.log(JSON.stringify(cats, null, 2));

const menuItems = [];
$('li.menu-item-has-children ul.sub-menu > li > a').each((i, el) => {
  menuItems.push({
    title: $(el).text().trim(),
    link: $(el).attr('href')
  });
});
console.log('MENU ITEMS:', JSON.stringify(menuItems, null, 2));
