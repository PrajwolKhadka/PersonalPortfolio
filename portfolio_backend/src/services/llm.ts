// src/services/llm.ts

import axios from 'axios';
import { API_KEY, LLM_MODEL_NAME, MAX_TOKENS, TEMPERATURE } from '../config/constants';

export async function generateResponse(
  query: string,
  context: string
): Promise<string> {
  try {
    const prompt = `You are a helpful AI assistant answering questions about Prajwol Khadka's portfolio by other people.

Here is all the information from the portfolio:

${context}

User question: ${query}

Please provide a helpful, accurate response based on the portfolio information above. Be conversational and friendly.`;

    // Using OpenRouter API with timeout
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: LLM_MODEL_NAME,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: MAX_TOKENS,
        temperature: TEMPERATURE
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:5000',
          'X-Title': 'Portfolio Chatbot'
        },
        timeout: 30000 // 30 second timeout
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. The AI is taking too long to respond.');
      }
      console.error('OpenRouter API error:', error.response?.data || error.message);
      throw new Error(`Failed to generate response: ${error.response?.data?.error?.message || error.message}`);
    }
    throw error;
  }
}