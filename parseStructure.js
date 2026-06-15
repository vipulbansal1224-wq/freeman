const fs = require('fs');
const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/19849158-d5ec-4b9a-8254-b746505369d7/.system_generated/steps/1561/content.md', 'utf8');

const regex = /<section[^>]*>|<div[^>]*class=["'][^"']*(section|container|row)[^"']*["'][^>]*>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(match[0].replace(/\n/g, ' ').substring(0, 100));
}
