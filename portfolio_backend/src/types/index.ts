export interface PortfolioItem {
  id: number;
  type: 'personal_info' | 'skill' | 'certificate' | 'project' | 'blog';
  title: string;
  content: string;
  embeddings: number[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface SearchResult {
  item: PortfolioItem;
  similarity: number;
}

export interface ChatRequest {
  message: string;
  conversationHistory?: ChatMessage[];
}

export interface ChatResponse {
  response: string;
  sources: SearchResult[];
  metadata?: {
    totalItems: number;
    processingTime?: number;
  };
}