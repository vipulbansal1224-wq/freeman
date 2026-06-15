const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('news-and-press.html', 'utf8');
const $ = cheerio.load(html);

const newsData = [];

$('.company-about .container > ul > div').each((i, el) => {
    // Each div contains an h2 (year), and then an ul.news-wrapper
    const year = $(el).find('h2.title').text().trim();
    if (!year) return; // sometimes it might not match

    const items = [];
    $(el).find('.news-wrapper li').each((j, liEl) => {
        const img = $(liEl).find('.image-container img').attr('src');
        const date = $(liEl).find('.date').text().trim();
        const aTag = $(liEl).find('a.news_title');
        const title = aTag.text().trim();
        const link = aTag.attr('href');
        
        if (title) items.push({ title, date, img, link });
    });
    
    if (items.length > 0) {
        newsData.push({ year, items });
    }
});

fs.writeFileSync('news-data.json', JSON.stringify(newsData, null, 2));
console.log(`Extracted ${newsData.length} years of news.`);
