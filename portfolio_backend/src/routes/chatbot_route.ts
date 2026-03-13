// src/routes/chatbot_route.ts

import { Router, Request, Response } from 'express';
import { generateResponse } from '../services/llm';
import { loadPortfolio, getPortfolioStats } from '../services/portfolio';
import { ChatRequest, ChatResponse } from '../types';

const router = Router();

// Main chat endpoint (NO EMBEDDINGS - simple LLM approach)
router.post('/', async (req: Request, res: Response) => {
  const startTime = Date.now();
  
  try {
    const { message } = req.body as ChatRequest;
    
    // Validation
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({ 
        error: 'Message is required and must be a non-empty string' 
      });
    }

    console.log(`💬 Received query: "${message}"`);

    // Load portfolio
    const portfolio = await loadPortfolio();
    
    // Create context from all portfolio items
    const context = portfolio.map((item, index) => 
      `[${index + 1}] ${item.type}: ${item.title}\n${item.content}`
    ).join('\n\n');
    
    console.log('🤖 Generating AI response...');
    
    // Generate response using LLM with full context
    const aiResponse = await generateResponse(message, context);
    
    const processingTime = Date.now() - startTime;
    console.log(`✅ Response generated in ${processingTime}ms`);
    
    // Send response
    const response: ChatResponse = {
      response: aiResponse,
      sources: [], // No sources since we're not using embeddings
      metadata: {
        totalItems: portfolio.length,
        processingTime
      }
    };
    
    res.json(response);
    
  } catch (error) {
    console.error('❌ Chat error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    res.status(500).json({ 
      error: 'Failed to process chat request',
      details: errorMessage
    });
  }
});

// Get portfolio statistics
router.get('/stats', async (req: Request, res: Response) => {
  try {
    const portfolio = await loadPortfolio();
    const stats = getPortfolioStats(portfolio);
    
    res.json({
      totalItems: portfolio.length,
      breakdown: stats
    });
  } catch (error) {
    console.error('❌ Stats error:', error);
    res.status(500).json({ error: 'Failed to get portfolio stats' });
  }
});

// Health check for chat service
router.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'ok',
    service: 'chatbot',
    timestamp: new Date().toISOString()
  });
});

export default router;