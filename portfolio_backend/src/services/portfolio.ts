import fs from 'fs/promises';
import path from 'path';
import { PortfolioItem } from '../types';
import { PORTFOLIO_PATH } from '../config/constants';

let portfolioCache: PortfolioItem[] | null = null;

export async function loadPortfolio(): Promise<PortfolioItem[]> {
  if (portfolioCache) {
    return portfolioCache;
  }
  
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

export function getPortfolioByType(type: string, portfolio: PortfolioItem[]): PortfolioItem[] {
  return portfolio.filter(item => item.type === type);
}

export function getPortfolioById(id: number, portfolio: PortfolioItem[]): PortfolioItem | undefined {
  return portfolio.find(item => item.id === id);
}

export function searchPortfolioByTitle(query: string, portfolio: PortfolioItem[]): PortfolioItem[] {
  const lowerQuery = query.toLowerCase();
  return portfolio.filter(item => 
    item.title.toLowerCase().includes(lowerQuery)
  );
}

export function clearCache(): void {
  portfolioCache = null;
  console.log('🔄 Portfolio cache cleared');
}

export function getPortfolioStats(portfolio: PortfolioItem[]): Record<string, number> {
  const stats: Record<string, number> = {};
  
  portfolio.forEach(item => {
    stats[item.type] = (stats[item.type] || 0) + 1;
  });
  
  return stats;
}