const fs = require('fs');
const https = require('https');
const path = require('path');

const html = fs.readFileSync('aboutContent.html', 'utf8');
const regex = /src="(https:\/\/www\.freemansgroup\.com\/[^"]+)"/g;

let matches;
const urls = new Set();
while ((matches = regex.exec(html)) !== null) {
  urls.add(matches[1]);
}

const downloadDir = path.join(__dirname, 'public', 'images', 'about');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

Array.from(urls).forEach(url => {
  const filename = path.basename(url);
  const filepath = path.join(downloadDir, filename);
  https.get(url, res => {
    const file = fs.createWriteStream(filepath);
    res.pipe(file);
    file.on('finish', () => file.close());
  }).on('error', err => console.log('Error downloading', url, err));
});

console.log(`Downloading ${urls.size} images...`);
