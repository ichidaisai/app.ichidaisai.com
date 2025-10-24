const fs = require('fs');
const path = require('path');

// Delete original JPG/PNG files from directories
function deleteOriginalImages(directory) {
  const files = fs.readdirSync(directory);
  let deleteCount = 0;
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    // Skip if it's a directory
    if (stat.isDirectory()) {
      continue;
    }
    
    // Check if file is jpg, jpeg, or png
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'].includes(ext)) {
      continue;
    }
    
    // Check if corresponding webp exists
    const nameWithoutExt = path.basename(file, ext);
    const webpPath = path.join(directory, `${file}.webp`);
    const webpPath2 = path.join(directory, `${nameWithoutExt}.webp`);
    
    if (fs.existsSync(webpPath) || fs.existsSync(webpPath2)) {
      try {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Deleted: ${file}`);
        deleteCount++;
      } catch (error) {
        console.error(`❌ Error deleting ${file}:`, error.message);
      }
    } else {
      console.log(`⚠️  Skipping ${file} (no WebP equivalent found)`);
    }
  }
  
  return deleteCount;
}

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const imagesDir = path.join(publicDir, 'images');
  const projectsDir = path.join(publicDir, 'projects');
  
  console.log('🗑️  Deleting original JPG/PNG files...\n');
  
  console.log('📁 Deleting in /public/images/');
  const imagesCount = deleteOriginalImages(imagesDir);
  
  console.log('\n📁 Deleting in /public/projects/');
  const projectsCount = deleteOriginalImages(projectsDir);
  
  const total = imagesCount + projectsCount;
  console.log(`\n✨ Deletion complete! Removed ${total} original files.`);
  console.log('✅ WebP versions are kept and ready to use.');
}

main().catch(console.error);
