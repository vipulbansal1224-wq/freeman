import fs from 'fs';
import path from 'path';
import https from 'https';

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(dest);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const run = async () => {
  const imageDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
  }

  const hdImages = [
    'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banners-Pocket-Tapes-1.webp',
    'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banners-Fibreglass-1.webp',
    'https://www.freemansgroup.com/wp-content/uploads/2026/04/super-brand-25-26.png'
  ];

  for (const url of hdImages) {
    const filename = url.split('/').pop();
    const dest = path.join(imageDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await downloadFile(url, dest);
      console.log(`Saved ${filename}`);
    } catch (e) {
      console.error(`Failed to download ${filename}:`, e);
    }
  }
};

run();
