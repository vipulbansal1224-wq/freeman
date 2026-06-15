import fs from 'fs';
import path from 'path';
import https from 'https';

const imageUrls = [
  "https://www.freemansgroup.com/wp-content/uploads/2026/04/FREEMANS-LOGO-28th-april-1.jpg",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Banner-19-05-20-1.jpg",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/FIBREGLASS-MEASURING-TAPE-1.jpg",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Steel-tape-1.jpg",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/banner-pic-1.png",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Measuring-Wheel-MW01-1.jpg",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Pocket-Tape.png",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Fibreglass-2.png",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Steel-Long-tape-1.png",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/spirit-levels-2.png",
  "https://www.freemansgroup.com/wp-content/uploads/2023/03/Measuring-Wheels-3.png"
];

const downloadDir = path.join(process.cwd(), 'public', 'images');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const filename = path.basename(url);
    const dest = path.join(downloadDir, filename);
    const file = fs.createWriteStream(dest);

    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log("Downloading images...");
  for (const url of imageUrls) {
    try {
      await downloadImage(url);
      console.log(`Downloaded ${path.basename(url)}`);
    } catch (e) {
      console.error(`Failed to download ${url}`);
    }
  }
  console.log("Done downloading all images!");
}

main();
