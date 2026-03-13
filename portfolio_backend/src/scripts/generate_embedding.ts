// // scripts/generate_embeddings.ts
// // Run once: npx ts-node scripts/generate_embeddings.ts
// // This reads portfolio.json, adds embeddings to each item, and saves it back.

// import fs from 'fs/promises';
// import path from 'path';
// import { generateEmbedding } from '../services/embeddings';
// import { PortfolioItem } from '../types';

// const PORTFOLIO_PATH = path.join(__dirname, '../data/portfolio.json');

// async function main() {
//   console.log('📂 Loading portfolio.json...');
//   const raw = await fs.readFile(PORTFOLIO_PATH, 'utf-8');
//   const items: PortfolioItem[] = JSON.parse(raw);

//   console.log(`📝 Found ${items.length} items. Generating embeddings...`);

//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     // Combine title + content for richer embedding
//     const text = `${item.title}. ${item.content}`;
//     console.log(`  [${i + 1}/${items.length}] Embedding: "${item.title}"`);
//     item.embeddings = await generateEmbedding(text);
//   }

//   await fs.writeFile(PORTFOLIO_PATH, JSON.stringify(items, null, 2), 'utf-8');
//   console.log('✅ Done! portfolio.json updated with embeddings.');
// }

// main().catch((err) => {
//   console.error('❌ Error:', err);
//   process.exit(1);
// });

// src/scripts/generate_embedding.ts
// Run whenever you add/update items in portfolio_source.json:
//   npx ts-node src/scripts/generate_embedding.ts

import fs from 'fs/promises';
import path from 'path';
import { generateEmbedding } from '../services/embeddings';

const SOURCE_PATH = path.join(__dirname, '../data/portfolio_source.json');
const OUTPUT_PATH = path.join(__dirname, '../data/portfolio.json');

interface SourceItem {
  id: number;
  type: string;
  title: string;
  content: string;
}

interface OutputItem extends SourceItem {
  embeddings: number[];
}

async function main() {
  console.log('...Loading portfolio_source.json...');
  const raw = await fs.readFile(SOURCE_PATH, 'utf-8');
  const items: SourceItem[] = JSON.parse(raw);

  console.log(`!!Found ${items.length} items. Generating embeddings...`);

  const output: OutputItem[] = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const text = `${item.title}. ${item.content}`;
    console.log(`  [${i + 1}/${items.length}] Embedding: "${item.title}"`);
    const embeddings = await generateEmbedding(text);
    output.push({ ...item, embeddings });
  }

  await fs.writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2), 'utf-8');
  console.log('...Done! portfolio.json updated with embeddings.');
  console.log(`...Total items: ${output.length}`);
}

main().catch((err) => {
  console.error('XXXXX Error:', err);
  process.exit(1);
});