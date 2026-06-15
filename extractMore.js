const fs = require('fs');
const html = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/19849158-d5ec-4b9a-8254-b746505369d7/.system_generated/steps/1561/content.md', 'utf8');

const targetStr = 'Years of Manufacturing Excellence';
const startStats = html.indexOf(targetStr);
console.log('Stats nearby:', html.substring(startStats - 1500, startStats + 3000));
