const fs = require('fs');
const path = require('path');

const blogDir = '/Users/annabellaszabo/Downloads/Blockmarketing Site/client/src/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

// List of ~50 diverse Unsplash IDs for tech/marketing/crypto
const imageIds = [
  "1551288049-bebda4e38f71", "1639762681485-074b7f938ba0", "1611162617474-5b21e879e113",
  "1581291518633-83b4ebd1d83e", "1451187580459-43490279c0fa", "1545235617-946f723c784e",
  "1556761175-5973dc0f32e7", "1460925895917-afdab827c52f", "1531403009284-440f080d1e12",
  "1572021335469-31706a17aaef", "1526628953303-11692391e352", "1516110833967-0b5716ca1387",
  "1591696205418-62f6a3635334", "1504384764586-bb4cdc1707b0", "1498050108023-c5249f4df085",
  "1526374965328-7f61d4dc18c5", "1605792657043-2b43c5a09311", "1524178232363-1fb2b075b655",
  "1563911302283-d2bc129e7c1f", "1607799276604-38362a6042f5", "1576085898323-53a507848353",
  "1518770660439-4636190af475", "1620712943543-066c5239565d", "1642104704074-907c0698b98d",
  "1639322537228-ad7127ef94f4", "1640340434855-6084b1f4901c", "1644088979610-1c422c9bb1ed",
  "1645724231908-410ce9c228d7", "1614064641938-3bcee5292403", "1614064642639-4600a9d8d939",
  "1614064643328-3bcee5292403", "1618060932288-6d2a4a75508a", "1618060932014-4deda4932554",
  "1633516524133-3d078afc8491", "1633516523992-8098c471207e", "1633516523932-8692694b46c6",
  "1636830530733-1bf33c623b08", "1636830531477-8af3523f3801", "1620912189865-1e8a33da4c5e",
  "1625316708582-7e3e7336876c", "1624555095045-8c01d4a0352f", "1624969862293-b7e86e331263",
  "1617529462060-e8220f862354", "1617529462534-754d9b047683", "1624396963238-df0e48367ff7",
  "1604595928859-9923831b0e6e", "1604595928646-7c05527a29ee", "1517245386807-bb43f82c33c4"
];

let filesProcessed = 0;

files.forEach((file, index) => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Simple hash of filename to pick a consistent unique image
    let hash = 0;
    for (let i = 0; i < file.length; i++) {
        hash = file.charCodeAt(i) + ((hash << 5) - hash);
    }
    const imageIndex = Math.abs(hash) % imageIds.length;
    const newImageId = imageIds[imageIndex];
    
    // Replace the image url
    // Pattern: image: "https://images.unsplash.com/..."
    const hasImage = content.match(/image: "https:\/\/images\.unsplash\.com\/photo-[^"]+"/);
    
    if (hasImage) {
       // Only replace if it's one of the duplicates or indiscriminately to ensure uniqueness?
       // Let's replace ALL to ensure distribution.
       const newUrl = `https://images.unsplash.com/photo-${newImageId}?q=80&w=2000&auto=format&fit=crop`;
       
       // Handle alt text (post title)
       // The user said "make sure to add alt text for all images"
       // But in markdown metadata, we usually just have `image: "url"`. 
       // The Alt text is handled in the Component rendering (`alt={post.title}`).
       // So we just need to update the URL.
       
       const newContent = content.replace(/image: "https:\/\/images\.unsplash\.com\/[^"]+"/, `image: "${newUrl}"`);
       
       if (newContent !== content) {
           fs.writeFileSync(filePath, newContent, 'utf8');
           filesProcessed++;
       }
    }
});

console.log(`Updated images in ${filesProcessed} files.`);
