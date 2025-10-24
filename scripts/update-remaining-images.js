const fs = require('fs');
const path = require('path');

// Update src/app/page.tsx
const pageFile = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let pageContent = fs.readFileSync(pageFile, 'utf8');

pageContent = pageContent.replace('/images/kinen_mark.png', '/images/kinen_mark.webp');
pageContent = pageContent.replace('/images/pettokinsi_mark.png', '/images/pettokinsi_mark.webp');
pageContent = pageContent.replace('/images/osakekinsi_mark.png', '/images/osakekinsi_mark.webp');

fs.writeFileSync(pageFile, pageContent, 'utf8');
console.log('✅ Updated src/app/page.tsx');

// Update src/app/(standard)/cosplay/page.tsx
const cosplayFile = path.join(__dirname, '..', 'src', 'app', '(standard)', 'cosplay', 'page.tsx');
let cosplayContent = fs.readFileSync(cosplayFile, 'utf8');

cosplayContent = cosplayContent.replace('/projects/cosplay_contest1.png', '/projects/cosplay_contest1.webp');
cosplayContent = cosplayContent.replace('/projects/cosplay_contest2.png', '/projects/cosplay_contest2.webp');
cosplayContent = cosplayContent.replace('/projects/cosplay_contest3.png', '/projects/cosplay_contest3.webp');

fs.writeFileSync(cosplayFile, cosplayContent, 'utf8');
console.log('✅ Updated src/app/(standard)/cosplay/page.tsx');

console.log('\n✨ All image references updated to WebP!');
