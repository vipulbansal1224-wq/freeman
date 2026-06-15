const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('contact.html', 'utf8');
const $ = cheerio.load(html);

const data = {
    locations: [],
    form: true
};

// Based on the text, let's just scrape the HTML directly to a file so I can read it without regexes
fs.writeFileSync('contact-extracted.html', $('.page-wrap').html());
console.log("Wrote main content to contact-extracted.html");
