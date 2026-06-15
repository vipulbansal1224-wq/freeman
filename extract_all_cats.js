const fs = require('fs');
const cheerio = require('cheerio');
const $ = cheerio.load(fs.readFileSync('measuring-tapes.html', 'utf8'));
const cats = [];
$('.main-navigation li.menu-item-has-children > a').each((i, el) => {
    if ($(el).text().trim().toLowerCase() === 'products') {
        $(el).parent().find('ul.sub-menu > li > a').each((j, ael) => {
            const link = $(ael).attr('href');
            // only take links that start with /product-category/ or similar
            cats.push({
                title: $(ael).text().trim(),
                link: link,
                slug: link.split('/').filter(Boolean).pop()
            });
        });
    }
});
console.log(JSON.stringify(cats, null, 2));
