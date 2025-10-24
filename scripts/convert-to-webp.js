const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Convert images in a directory to WebP
async function convertToWebP(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    // Skip if it's a directory
    if (stat.isDirectory()) {
      continue;
    }
    
    // Check if file is jpg, jpeg, or png
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      continue;
    }
    
    // Generate output filename
    const nameWithoutExt = path.basename(file, ext);
    const outputPath = path.join(directory, `${nameWithoutExt}.webp`);
    
    // Skip if webp already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${file} (WebP already exists)`);
      continue;
    }
    
    try {
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      console.log(`✅ Converted: ${file} → ${nameWithoutExt}.webp`);
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  const projectsDir = path.join(publicDir, 'projects');
  
  console.log('🖼️  Converting images to WebP format...\n');
  
  console.log('📁 Converting images in /public/images/');
  await convertToWebP(imagesDir);
  
  console.log('\n📁 Converting images in /public/projects/');
  await convertToWebP(projectsDir);
  
  console.log('\n✨ Conversion complete!');
  console.log('\n⚠️  Note: Original JPG/PNG files are kept. You can delete them manually after verifying the WebP versions work correctly.');
}

main().catch(console.error);
