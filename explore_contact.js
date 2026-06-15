const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('contact.html', 'utf8');
const $ = cheerio.load(html);

// Find banner
let bannerSrc = '';
const styleAttr = $('.inner-header').attr('style') || '';
const match = styleAttr.match(/url\(['"]?(.*?)['"]?\)/);
if (match) bannerSrc = match[1];

console.log("Banner:", bannerSrc);

const contactText = $('.page-wrap').text().replace(/\s+/g, ' ');
console.log("Text:", contactText.substring(0, 1000));
