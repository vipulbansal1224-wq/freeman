const fs = require('fs');
const html = fs.readFileSync('measuring-tapes.html', 'utf8');
const cheerio = require('cheerio');
const $ = cheerio.load(html);

console.log($('.prod-item').first().html());

console.log("-----");
console.log("Banner section:");
console.log($('.page-wrap').prev().html() || $('.page-wrap').parent().html().substring(0, 500));
