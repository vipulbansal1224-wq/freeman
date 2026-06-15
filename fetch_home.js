const https = require('https');
const cheerio = require('cheerio');

https.get('https://www.freemansgroup.com/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const items = [];
    $('.product-cat-item').each((i, el) => {
      const title = $(el).find('h3').text().trim();
      const link = $(el).find('a').attr('href');
      const img = $(el).find('img').attr('src');
      if (title && !items.find(item => item.title === title)) {
        items.push({title, link, img});
      }
    });

    console.log(JSON.stringify(items, null, 2));
    
    // Header dropdown menu
    const menuItems = [];
    $('li.menu-item-has-children ul.sub-menu > li > a').each((i, el) => {
      menuItems.push({
        title: $(el).text().trim(),
        link: $(el).attr('href')
      });
    });
    console.log('MENU ITEMS:', JSON.stringify(menuItems, null, 2));
  });
});
