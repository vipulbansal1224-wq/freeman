const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const $ = cheerio.load(html);

const items = [];
$('.box-product').each((i, el) => {
  const title = $(el).find('h2').text().trim();
  const img = $(el).find('img').attr('src');
  items.push({title, img});
});
if (items.length > 0) {
    console.log("Found .box-product items:", items.length);
}

const list = [];
$('li.product').each((i, el) => {
  const title = $(el).find('h2').text().trim();
  const img = $(el).find('img').attr('src');
  list.push({title, img});
});
if (list.length > 0) {
    console.log("Found li.product items:", list.length);
}

console.log($('.site-main').html().substring(0, 1500));
