// scripts/build_portfolio_items.ts
//
// Rebuilds data/portfolio.json from the portfolioData object.
// Run this FIRST whenever portfolioData changes (new project, new
// experience entry, new award, etc.), THEN run the Python
// generate_embeddings.py script to fill in embeddings for any item
// that doesn't have one yet.
//
//   npx ts-node scripts/build_portfolio_items.ts
//   python scripts/generate_embeddings.py
//
// Existing embeddings are preserved for items whose content hasn't
// changed, so you're not re-embedding your whole portfolio (and
// burning API calls) every time you add one thing.

import fs from 'fs';
import path from 'path';
import { portfolioData } from '../data/portfolioData';
import { PortfolioItem } from '../types';

const OUTPUT_PATH = path.join(__dirname, '../data/portfolio.json');

function loadExisting(): PortfolioItem[] {
  try {
    const raw = fs.readFileSync(OUTPUT_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Reuse an existing embedding only if the same title+content already
// exists in the current file — if the content changed, drop the old
// embedding so it gets regenerated.
function findExistingEmbedding(
  existing: PortfolioItem[],
  title: string,
  content: string
): number[] {
  const match = existing.find((i) => i.title === title && i.content === content);
  return match?.embeddings ?? [];
}

function buildItems(): PortfolioItem[] {
  const existing = loadExisting();
  const items: PortfolioItem[] = [];
  let id = 1;

  const push = (type: PortfolioItem['type'], title: string, content: string) => {
    items.push({
      id: id++,
      type,
      title,
      content,
      embeddings: findExistingEmbedding(existing, title, content),
    });
  };

  // Personal info
  push(
    'personal_info',
    'About',
    `${portfolioData.name} is a ${portfolioData.title} based in ${portfolioData.location}. ${portfolioData.tagline}`
  );
  push('personal_info', 'Education', portfolioData.education.join('. '));
  push(
    'personal_info',
    'Contact',
    `Email: ${portfolioData.contact.email}, LinkedIn: ${portfolioData.contact.linkedin}, GitHub: ${portfolioData.contact.github}, Portfolio: ${portfolioData.contact.portfolio}`
  );

  // Skills (one item per category so they retrieve well individually)
  const s = portfolioData.skills;
  push('skill', 'Programming Languages', s.languages.join(', '));
  push('skill', 'Frameworks & Libraries', s.frameworks.join(', '));
  push('skill', 'Data & Analytics', s.dataAndAnalytics.join(', '));
  push('skill', 'Other Skills', s.other.join(', '));
  push('skill', 'Spoken Languages', s.spokenLanguages.join(', '));

  // Experience
  portfolioData.experience.forEach((e) => {
    push(
      'experience',
      `${e.role} at ${e.organization}`,
      `${e.role} at ${e.organization} (${e.period}). ${e.points.join(' ')}`
    );
  });

  // Awards
  portfolioData.awards.forEach((award, i) => {
    push('award', `Award ${i + 1}`, award);
  });

  // Certificates
  portfolioData.certificate.forEach((c) => {
    push('certificate', c.name, `${c.name} (${c.institute})`);
  });

  // Projects
  portfolioData.projects.forEach((p) => {
    const tech = 'tech' in p && p.tech ? ` Technologies: ${p.tech.join(', ')}.` : '';
    push('project', p.name, `${p.desc}${tech}`);
  });

  // Blogs
  portfolioData.blogs.forEach((b, i) => {
    push('blog', `Blog ${i + 1}`, b);
  });

  return items;
}

const items = buildItems();
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(items, null, 2), 'utf-8');

const missingEmbeddings = items.filter((i) => i.embeddings.length === 0).length;
console.log(`Wrote ${items.length} items to ${OUTPUT_PATH}`);
console.log(`${missingEmbeddings} item(s) need embeddings — run generate_embeddings.py next.`);