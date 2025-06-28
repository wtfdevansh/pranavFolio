'use server';

/**
 * @fileOverview An AI agent that determines the most appropriate help message to display.
 *
 * - helpCommand - A function that handles the help command process.
 * - HelpCommandInput - The input type for the helpCommand function.
 * - HelpCommandOutput - The return type for the helpCommand function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HelpCommandInputSchema = z.object({
  command: z
    .string()
    .describe('The command for which help is being requested.  If empty, then general help is requested.'),
});
export type HelpCommandInput = z.infer<typeof HelpCommandInputSchema>;

const HelpCommandOutputSchema = z.object({
  helpMessage: z.string().describe('The help message to display to the user.'),
});
export type HelpCommandOutput = z.infer<typeof HelpCommandOutputSchema>;

export async function helpCommand(input: HelpCommandInput): Promise<HelpCommandOutput> {
  return helpCommandFlow(input);
}

const cannedHelpMessages = {
  ls: '`ls` - Lists the available directories.',
  cd: '`cd <directory>` - Changes the current directory to <directory>.',
  about: '`about` - Displays information about me.',
  projects: '`projects` - Displays my projects.',
  experience: '`experience` - Displays my work experience.',
  startup: '`startup` - Displays information about my startup.',
  achievements: '`achievements` - Displays my achievements.',
  help: '`help <command>` - Displays help for a specific command.',
  general: 'Available commands: ls, cd, about, projects, experience, startup, achievements, help.',
};

const helpCommandPrompt = ai.definePrompt({
  name: 'helpCommandPrompt',
  input: {schema: HelpCommandInputSchema},
  output: {schema: HelpCommandOutputSchema},
  prompt: `You are a helpful assistant that provides help messages for a terminal interface.

The user has entered the following command: "{{command}}".

Decide whether to provide a canned help message or generate a dynamic help message based on the command.

Here are the canned help messages:

{{#each cannedHelpMessages}}
  {{@key}}: {{this}}
{{/each}}

If the command is empty or invalid, provide the general help message.

Output the help message in the following JSON format:
{
  "helpMessage": "<help message>"
}
`,
  config: {
    temperature: 0.2,
    topP: 0.3,
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
    ],
  },
});

const helpCommandFlow = ai.defineFlow(
  {
    name: 'helpCommandFlow',
    inputSchema: HelpCommandInputSchema,
    outputSchema: HelpCommandOutputSchema,
  },
  async input => {
    const cannedHelpMessagesStringified = JSON.stringify(cannedHelpMessages);

    const {output} = await helpCommandPrompt({
      ...input,
      cannedHelpMessages: cannedHelpMessages,
    });
    return output!;
  }
);
