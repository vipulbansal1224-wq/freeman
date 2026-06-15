const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('careers.html', 'utf8');
const $ = cheerio.load(html);

console.log("H1:", $('h1').text().trim());

const formHtml = $('form').html();
console.log("Form exists?", !!formHtml);

console.log("Body text snippet:", $('body').text().replace(/\s+/g, ' ').substring(0, 1000));
