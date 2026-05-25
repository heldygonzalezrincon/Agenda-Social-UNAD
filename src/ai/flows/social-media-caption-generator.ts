'use server';
/**
 * @fileOverview A Genkit flow for generating social media captions and hashtags from article content.
 *
 * - generateSocialMediaCaption - A function that handles the generation of social media captions and hashtags.
 * - SocialMediaCaptionGeneratorInput - The input type for the generateSocialMediaCaption function.
 * - SocialMediaCaptionGeneratorOutput - The return type for the generateSocialMediaCaption function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SocialMediaCaptionGeneratorInputSchema = z.object({
  articleTitle: z.string().describe('The title of the article.'),
  articleContent: z.string().describe('The full content of the article.'),
  platform: z.string().optional().describe('The target social media platform (e.g., "Twitter", "Instagram", "LinkedIn").'),
});
export type SocialMediaCaptionGeneratorInput = z.infer<typeof SocialMediaCaptionGeneratorInputSchema>;

const SocialMediaCaptionGeneratorOutputSchema = z.object({
  caption: z.string().describe('An engaging social media caption.'),
  hashtags: z.array(z.string()).describe('A list of relevant hashtags.'),
});
export type SocialMediaCaptionGeneratorOutput = z.infer<typeof SocialMediaCaptionGeneratorOutputSchema>;

const socialMediaCaptionPrompt = ai.definePrompt({
  name: 'socialMediaCaptionPrompt',
  input: { schema: SocialMediaCaptionGeneratorInputSchema },
  output: { schema: SocialMediaCaptionGeneratorOutputSchema },
  prompt: `You are an expert social media manager. Your task is to create an engaging social media caption and a list of relevant hashtags for an article.

Article Title: {{{articleTitle}}}
Article Content: {{{articleContent}}}

{{#if platform}}Target Platform: {{{platform}}}{{/if}}

Generate a concise and attention-grabbing caption that encourages clicks and shares. Then, identify 5-10 relevant and trending hashtags that will maximize reach.

Ensure the output is in JSON format matching the SocialMediaCaptionGeneratorOutputSchema.`,
});

const socialMediaCaptionGeneratorFlow = ai.defineFlow(
  {
    name: 'socialMediaCaptionGeneratorFlow',
    inputSchema: SocialMediaCaptionGeneratorInputSchema,
    outputSchema: SocialMediaCaptionGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await socialMediaCaptionPrompt(input);
    return output!;
  }
);

export async function generateSocialMediaCaption(input: SocialMediaCaptionGeneratorInput): Promise<SocialMediaCaptionGeneratorOutput> {
  return socialMediaCaptionGeneratorFlow(input);
}
