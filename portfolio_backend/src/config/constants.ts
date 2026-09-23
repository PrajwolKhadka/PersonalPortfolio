import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// API Keys
export const API_KEY = process.env.API_KEY || '';
export const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';

// Model Configuration
export const LLM_MODEL_NAME = process.env.LLM_MODEL_NAME || 'meta-llama/llama-3.2-3b-instruct:free';

// Gemini models to try, in order, before falling back to OpenRouter
export const GEMINI_MODELS_TO_TRY = [
  'gemini-3.8-flash',
  'gemini-2.5-flash',
];

// OpenRouter free models to try, in order, if every Gemini model fails
export const OPENROUTER_MODELS_TO_TRY = [
  'gemma-4-31b-it:free',
  'google/gemma-4-26b-a4b-it:free',
  'liquid/lfm-2.5-1.2b-thinking:free',
  'nousresearch/hermes-3-llama-3.1-405b:free',
  'openrouter/free',
];

// Server Configuration
export const PORT = parseInt(process.env.PORT || '5000', 10);
export const NODE_ENV = process.env.NODE_ENV || 'development';

// File Paths
export const PORTFOLIO_PATH = process.env.PORTFOLIO_PATH || './data/portfolio.json';

// LLM Configuration
export const MAX_TOKENS = parseInt(process.env.MAX_TOKENS || '1024', 10);
export const TEMPERATURE = parseFloat(process.env.TEMPERATURE || '0.7');

// CORS Configuration
export const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Validation
if (!API_KEY && NODE_ENV === 'production') {
  console.warn('Warning: API_KEY is not set');
}
if (!OPENROUTER_API_KEY && NODE_ENV === 'production') {
  console.warn('Warning: OPENROUTER_API_KEY is not set — Gemini fallback will be unavailable');
}

// Export all as a config object (optional, for easier imports)
export const config = {
  api: {
    apiKey: API_KEY,
    openrouterApiKey: OPENROUTER_API_KEY,
  },
  models: {
    llm: LLM_MODEL_NAME,
    geminiModels: GEMINI_MODELS_TO_TRY,
    openrouterModels: OPENROUTER_MODELS_TO_TRY,
  },
  server: {
    port: PORT,
    nodeEnv: NODE_ENV,
    corsOrigin: CORS_ORIGIN,
  },
  paths: {
    portfolio: PORTFOLIO_PATH,
  },
  llm: {
    maxTokens: MAX_TOKENS,
    temperature: TEMPERATURE,
  },
};