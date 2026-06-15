const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('careers.html', 'utf8');
const $ = cheerio.load(html);

const data = {
    whyChooseUs: [],
    openings: []
};

// Assuming the "Why Choose Us" items are inside some list or divs
const text = $('body').text().replace(/\s+/g, ' ');
// Let's just grab the actual HTML sections
const mainContent = $('.page-wrap').html();
fs.writeFileSync('careers-extracted.html', mainContent || '');
console.log("Wrote main content to careers-extracted.html");
