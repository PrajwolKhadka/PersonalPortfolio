import { GoogleGenAI } from '@google/genai';
import OpenAI from 'openai';
import {
  API_KEY,
  OPENROUTER_API_KEY,
  GEMINI_MODELS_TO_TRY,
  OPENROUTER_MODELS_TO_TRY,
} from '../config/constants';

const ai = new GoogleGenAI({ apiKey: API_KEY });

const openrouter = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: OPENROUTER_API_KEY,
});

function buildPrompt(query: string, context: string) {
  return `You are a helpful AI assistant answering questions about Prajwol Khadka's portfolio by other people.
Make sure if anything inappropriate or illegal is asked respond with "I can't answer this as the topic goes against my code of conduct."

Here is the relevant portfolio information:

${context}

User question: ${query}

Please provide a helpful, accurate response based on the portfolio information above. Be conversational and friendly.`;
}

// Gemini is tried first across a list of models. If every Gemini model
// fails (quota, outage, etc.) we fall back to free OpenRouter models
// using the same prompt.
async function tryGemini(prompt: string): Promise<string | null> {
  for (const model of GEMINI_MODELS_TO_TRY) {
    try {
      console.log(`Trying Gemini model: ${model}`);

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });

      const text = response.text?.trim();
      if (!text) throw new Error(`Gemini model ${model} returned empty response`);

      console.log(`Success with Gemini model: ${model}`);
      return text;
    } catch (error) {
      console.error(`Gemini model ${model} failed:`, error);
      continue;
    }
  }
  return null;
}

async function tryOpenRouter(prompt: string): Promise<string | null> {
  for (const model of OPENROUTER_MODELS_TO_TRY) {
    try {
      console.log(`Trying OpenRouter model: ${model}`);

      const response = await openrouter.chat.completions.create({
        model,
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      });

      const text = response.choices[0]?.message?.content?.trim();
      if (!text) throw new Error(`OpenRouter model ${model} returned empty response`);

      console.log(`Success with OpenRouter model: ${model}`);
      return text;
    } catch (error) {
      console.error(`OpenRouter model ${model} failed:`, error);
      continue;
    }
  }
  return null;
}

export async function generateResponse(
  query: string,
  context: string
): Promise<string> {
  const prompt = buildPrompt(query, context);

  // 1. Try Gemini across all configured models.
  const geminiText = await tryGemini(prompt);
  if (geminiText) {
    return geminiText;
  }

  // 2. Gemini failed on every model — fall back to OpenRouter.
  console.warn('Gemini failed on all models, falling back to OpenRouter...');
  const openrouterText = await tryOpenRouter(prompt);
  if (openrouterText) {
    return openrouterText;
  }

  // 3. Everything failed.
  console.error('All Gemini and OpenRouter models failed for response generation');
  throw new Error('Failed to generate response: all models failed');
}