const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('contact.html', 'utf8');
const $ = cheerio.load(html);

// Let's just find the locations
const locations = [];
$('.tab-pane').each((i, el) => {
    // wait, from the text output, it looks like it uses tabs: "Sales Office Unit 1 Unit 2 Unit 3 Enquiry"
    // Let's dump the HTML of the tabs to see
});
console.log($('.contact-detail').html() || "No .contact-detail found");
console.log($('.nav-tabs').html() || "No .nav-tabs found");
