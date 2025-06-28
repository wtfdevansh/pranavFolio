
"use server";

import { helpCommand, type HelpCommandInput } from "@/ai/flows/help-command";

export async function getHelp(input: HelpCommandInput) {
  try {
    const result = await helpCommand(input);
    return result.helpMessage;
  } catch (error) {
    console.error("Error fetching help:", error);
    return "An error occurred while fetching help. Please try again.";
  }
}
