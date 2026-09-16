import { access, readdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const sourceDirectory = join(import.meta.dirname, "..", "src", "components");

async function getPngFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const sourcePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...await getPngFiles(sourcePath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".png")) {
      files.push(sourcePath);
    }
  }
  return files;
}

const files = await getPngFiles(sourceDirectory);
const concurrency = 8;

for (let index = 0; index < files.length; index += concurrency) {
  await Promise.all(files.slice(index, index + concurrency).map(async (sourcePath) => {
    const { dir, name } = parse(sourcePath);
    const outputPath = join(dir, `${name}.webp`);
    try {
      await access(outputPath);
      return;
    } catch {}
    await sharp(sourcePath)
      .webp({ quality: 82, effort: 2, smartSubsample: true })
      .toFile(outputPath);
    console.log(`Optimized ${sourcePath}`);
  }));
}
