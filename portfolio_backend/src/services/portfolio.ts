import fs from 'fs/promises';
import path from 'path';
import { PortfolioItem, SearchResult } from '../types';
import { PORTFOLIO_PATH } from '../config/constants';
import { cosineSimilarity, generateEmbedding } from './embeddings';

let portfolioCache: PortfolioItem[] | null = null;

export async function loadPortfolio(): Promise<PortfolioItem[]> {
  if (portfolioCache) return portfolioCache;

  try {
    const filePath = path.join(__dirname, '../../', PORTFOLIO_PATH);
    const data = await fs.readFile(filePath, 'utf-8');
    portfolioCache = JSON.parse(data);
    console.log(`✅ Portfolio loaded: ${portfolioCache?.length} items`);
    return portfolioCache!;
  } catch (error) {
    console.error('❌ Error loading portfolio:', error);
    throw new Error(`Failed to load portfolio: ${error}`);
  }
}

export async function searchSimilar(
  query: string,
  portfolio: PortfolioItem[],
  topK: number = 10
): Promise<SearchResult[]> {

  const itemsWithEmbeddings = portfolio.filter(
    (item) => item.embeddings && item.embeddings.length > 0
  );

  if (itemsWithEmbeddings.length === 0) {
    console.warn('XXXX No embeddings found. Run: npx ts-node scripts/generate_embeddings.ts');

    return portfolio.slice(0, topK).map((item) => ({ item, similarity: 1 }));
  }

  const queryEmbedding = await generateEmbedding(query);

  const scored = itemsWithEmbeddings.map((item) => ({
    item,
    similarity: cosineSimilarity(queryEmbedding, item.embeddings),
  }));

  return scored
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK);
}

export function clearCache(): void {
  portfolioCache = null;
  console.log('🔄 Portfolio cache cleared');
}

export function getPortfolioStats(portfolio: PortfolioItem[]): Record<string, number> {
  const stats: Record<string, number> = {};
  portfolio.forEach((item) => {
    stats[item.type] = (stats[item.type] || 0) + 1;
  });
  return stats;
}