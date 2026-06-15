const fs = require('fs');

const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/19849158-d5ec-4b9a-8254-b746505369d7/.system_generated/steps/1561/content.md', 'utf8');

const imgRegex = /<img[^>]+src=["']([^"']+)["']/g;
let match;
const imgs = new Set();

while ((match = imgRegex.exec(html)) !== null) {
  imgs.add(match[1]);
}

const cssUrlRegex = /url\(['"]?(https:\/\/[^'"\)]+)['"]?\)/g;
while ((match = cssUrlRegex.exec(html)) !== null) {
  imgs.add(match[1]);
}

console.log("Found URLs:");
Array.from(imgs).filter(url => url.includes('freemansgroup.com')).forEach(url => console.log(url));
