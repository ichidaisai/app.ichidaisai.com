const fs = require('fs');
const path = require('path');

// Read the dummyData.ts file
const filePath = path.join(__dirname, '..', 'src', 'libs', 'dummyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace image extensions
const replacements = [
  { from: '/images/noimage.png', to: '/images/noimage.webp' },
  { from: '/projects/とり★たま.JPG', to: '/projects/とり★たま.JPG.webp' },
  { from: '/projects/競技かるた部.PNG', to: '/projects/競技かるた部.PNG.webp' },
  { from: '/projects/IMG_2847.JPG', to: '/projects/IMG_2847.JPG.webp' },
  { from: '/projects/金属造形　金工舎.JPG', to: '/projects/金属造形　金工舎.JPG.webp' },
  { from: '/projects/まーじゃんぶ.PNG', to: '/projects/まーじゃんぶ.PNG.webp' },
  { from: '/projects/日本画有志展.PNG', to: '/projects/日本画有志展.PNG.webp' },
  { from: '/projects/猫の会.JPG', to: '/projects/猫の会.JPG.webp' },
  { from: '/projects/うさうさ.JPG', to: '/projects/うさうさ.JPG.webp' },
  { from: '/projects/茶道部表千家.JPG', to: '/projects/茶道部表千家.JPG.webp' },
  { from: '/projects/はぴねす.JPG', to: '/projects/はぴねす.JPG.webp' },
  { from: '/projects/開国飯店.PNG', to: '/projects/開国飯店.PNG.webp' },
  { from: '/projects/S2　広告.JPG', to: '/projects/S2　広告.JPG.webp' },
];

let changeCount = 0;
for (const { from, to } of replacements) {
  if (content.includes(from)) {
    content = content.replace(new RegExp(from, 'g'), to);
    changeCount++;
    console.log(`✅ Updated: ${from} → ${to}`);
  }
}

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✨ Done! Updated ${changeCount} image references in dummyData.ts`);
