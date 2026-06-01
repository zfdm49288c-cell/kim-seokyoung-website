const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const folders = ["japan", "osaka", "france", "vietnam"];

folders.forEach((folder) => {
  const imageDir = path.join(__dirname, "images", folder);
  const thumbDir = path.join(imageDir, "thumbs");

  if (!fs.existsSync(imageDir)) return;

  if (!fs.existsSync(thumbDir)) {
    fs.mkdirSync(thumbDir);
  }

  fs.readdirSync(imageDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .forEach(async (file) => {
      const inputPath = path.join(imageDir, file);
      const outputPath = path.join(thumbDir, file);

      await sharp(inputPath)
        .resize({ width: 500 })
        .jpeg({ quality: 75 })
        .toFile(outputPath);

      console.log(`created: images/${folder}/thumbs/${file}`);
    });
});
