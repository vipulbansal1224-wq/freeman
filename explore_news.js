const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('news-and-press.html', 'utf8');
const $ = cheerio.load(html);

// Find banner
let bannerSrc = '';
const styleAttr = $('.inner-header').attr('style') || '';
const match = styleAttr.match(/url\(['"]?(.*?)['"]?\)/);
if (match) bannerSrc = match[1];

console.log("Banner:", bannerSrc);
console.log("Title:", $('.inner-header-wrap h1').text().trim());

const items = [];
$('.news-item').each((i, el) => {
    const title = $(el).find('.news-title').text().trim();
    const date = $(el).find('.news-date').text().trim();
    const img = $(el).find('.news-img img').attr('src');
    const link = $(el).find('a').first().attr('href');
    const excerpt = $(el).find('.news-excerpt').text().trim();
    
    if (title) items.push({ title, date, img, link, excerpt });
});

if (items.length === 0) {
    // maybe different class names?
    console.log("No .news-item found, trying standard post classes.");
    $('.post, .type-post').each((i, el) => {
        const title = $(el).find('.entry-title').text().trim();
        const img = $(el).find('img').attr('src');
        const excerpt = $(el).find('.entry-content').text().trim();
        if (title) items.push({ title, img, excerpt });
    });
}

console.log(`Extracted ${items.length} news items.`);
if(items.length > 0) console.log(items[0]);
