'use server';
/**
 * @fileOverview A Genkit flow for extracting key takeaways from an article.
 *
 * - extractKeyTakeaways - A function that handles the key takeaway extraction process.
 * - ArticleContent - The input type for the extractKeyTakeaways function.
 * - KeyTakeawaysOutput - The return type for the extractKeyTakeaways function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArticleContentSchema = z.object({
  content: z
    .string()
    .describe(
      'The full text content of the article from which to extract key takeaways.'
    ),
});
export type ArticleContent = z.infer<typeof ArticleContentSchema>;

const KeyTakeawaysOutputSchema = z.object({
  takeaways: z
    .array(z.string())
    .describe('A list of key takeaways identified from the article.'),
});
export type KeyTakeawaysOutput = z.infer<typeof KeyTakeawaysOutputSchema>;

export async function extractKeyTakeaways(
  input: ArticleContent
): Promise<KeyTakeawaysOutput> {
  return keyTakeawayExtractionFlow(input);
}

const keyTakeawaysPrompt = ai.definePrompt({
  name: 'keyTakeawaysPrompt',
  input: {schema: ArticleContentSchema},
  output: {schema: KeyTakeawaysOutputSchema},
  prompt: `You are an expert content analyst. Your task is to identify and extract the most important key takeaways from the provided article content. The output must be a JSON object with a 'takeaways' field containing an array of strings, where each string is a concise key takeaway.

Article:
{{{content}}}`,
});

const keyTakeawayExtractionFlow = ai.defineFlow(
  {
    name: 'keyTakeawayExtractionFlow',
    inputSchema: ArticleContentSchema,
    outputSchema: KeyTakeawaysOutputSchema,
  },
  async (input) => {
    const {output} = await keyTakeawaysPrompt(input);
    return output!;
  }
);
