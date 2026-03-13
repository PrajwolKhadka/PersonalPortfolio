import { GoogleGenAI } from '@google/genai';
import { API_KEY, MAX_TOKENS, TEMPERATURE } from '../config/constants';

const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function generateResponse(
  query: string,
  context: string
): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a helpful AI assistant answering questions about Prajwol Khadka's portfolio by other people.
Make sure if anything inappropriate or illegal is asked respond with "I can't answer this as the topic goes against my code of conduct."

Here is the relevant portfolio information:

${context}

User question: ${query}

Please provide a helpful, accurate response based on the portfolio information above. Be conversational and friendly.`,
    });

    return response.text?? "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error(`Failed to generate response: ${error}`);
  }
}