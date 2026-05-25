'use server';
/**
 * @fileOverview This file defines a Genkit flow for summarizing articles.
 *
 * - summarizeArticle - A function that uses AI to summarize an article,
 *   extract key takeaways, and suggest social media copy.
 * - ArticleSummarizationInput - The input type for the summarizeArticle function.
 * - ArticleSummarizationOutput - The return type for the summarizeArticle function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ArticleSummarizationInputSchema = z.object({
  articleContent: z.string().describe('The full content of the article to be summarized.')
});
export type ArticleSummarizationInput = z.infer<typeof ArticleSummarizationInputSchema>;

const ArticleSummarizationOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the article.'),
  keyTakeaways: z.array(z.string()).describe('A list of main points or key takeaways from the article.'),
  socialMediaCopy: z.array(z.string()).describe('Suggested social media posts or captions for promoting the article, including relevant hashtags.')
});
export type ArticleSummarizationOutput = z.infer<typeof ArticleSummarizationOutputSchema>;

export async function summarizeArticle(input: ArticleSummarizationInput): Promise<ArticleSummarizationOutput> {
  return articleSummarizationFlow(input);
}

const articleSummarizationPrompt = ai.definePrompt({
  name: 'articleSummarizationPrompt',
  input: { schema: ArticleSummarizationInputSchema },
  output: { schema: ArticleSummarizationOutputSchema },
  prompt: `You are an AI assistant specialized in summarizing articles for digital media.
Your task is to read the provided article content and generate:
1. A concise summary that captures the main essence of the article.
2. A list of 3-5 key takeaways or main points.
3. 2-3 short social media posts or captions to promote the article, each including relevant hashtags.

Ensure the output is in JSON format, strictly following the provided output schema.

Article Content:
{{{articleContent}}}`
});

const articleSummarizationFlow = ai.defineFlow(
  {
    name: 'articleSummarizationFlow',
    inputSchema: ArticleSummarizationInputSchema,
    outputSchema: ArticleSummarizationOutputSchema
  },
  async (input) => {
    const { output } = await articleSummarizationPrompt(input);
    return output!;
  }
);
