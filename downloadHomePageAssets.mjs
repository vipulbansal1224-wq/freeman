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

  const urls = [
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/Banner-Long-steel-1.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banner-Spirit-Levels-1.webp',
    'https://www.freemansgroup.com/wp-content/uploads/2023/09/Banners-Measuring-Wheel-1.webp',
    
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/Pocket-Tape.png',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/Fibreglass-2.png',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/Steel-Long-tape-1.png',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/spirit-levels-2.png',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/Measuring-Wheels-3.png',
    
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/sec-about-image-3.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2026/04/75plus-Year-new_200x200-1.png',
    
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/icon-01-3.png',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/icon-02-3.png',
    'https://www.freemansgroup.com/wp-content/uploads/2026/04/icon-03-1.png',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/icon-04-3.png',

    'https://www.freemansgroup.com/wp-content/uploads/2023/03/tools-1-3.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/Measuring-Wheel-Image-370x310px-2.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/tools-2-3.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/tools-3-3.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/PRECISION-TOOLS-1.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/POWER-TOOL-1.jpg',
    'https://www.freemansgroup.com/wp-content/uploads/2023/03/HAND-TOOLS-2.jpg'
  ];

  for (const url of urls) {
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
