// Generate favicon.png (512x512) and apple-touch-icon.png (180x180)
// from public/logo.png using sharp. Run with: npm run icons
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const inputLogo = path.join(publicDir, 'logo.png');

async function ensureFile(p) {
  try {
    const st = await fs.stat(p);
    return st.isFile();
  } catch {
    return false;
  }
}

async function generate() {
  const hasLogo = await ensureFile(inputLogo);
  if (!hasLogo) {
    console.error(`Logo not found at ${inputLogo}. Please add public/logo.png`);
    process.exit(1);
  }

  // 1) favicon.png 512x512 (transparent background)
  const faviconOut = path.join(publicDir, 'favicon.png');
  await sharp(inputLogo)
    .resize({ width: 512, height: 512, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(faviconOut);

  // 2) apple-touch-icon.png 180x180 (white background recommended for iOS)
  const appleOut = path.join(publicDir, 'apple-touch-icon.png');
  await sharp(inputLogo)
    .resize({ width: 180, height: 180, fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(appleOut);

  console.log('Generated:');
  console.log(' -', path.relative(root, faviconOut));
  console.log(' -', path.relative(root, appleOut));
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
