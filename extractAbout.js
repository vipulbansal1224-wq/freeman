const fs = require('fs');
const html = fs.readFileSync('about.html', 'utf8');
const start = html.indexOf('<div class="inner-header"');
const end = html.indexOf('<footer');
const extracted = html.substring(start > -1 ? start : 0, end > -1 ? end : html.length);
fs.writeFileSync('aboutContent.html', extracted);
console.log('Extracted length:', extracted.length);
