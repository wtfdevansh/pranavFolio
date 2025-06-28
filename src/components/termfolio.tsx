
"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { getHelp } from "@/app/actions";

import Welcome from "@/components/content/welcome";
import About from "@/components/content/about";
import Projects from "@/components/content/projects";
import Experience from "@/components/content/experience";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type HistoryItem = {
  id: number;
  input?: string;
  output: React.ReactNode;
};

const SUGGESTED_COMMANDS = [
  "about",
  "projects",
  "experience",
  "help",
  "clear",
  "welcome",
];

export default function Termfolio() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  useEffect(() => {
    setHistory([{ id: 0, output: <Welcome /> }]);
    inputRef.current?.focus();
  }, []);

  const commands: {
    [key: string]: (args: string[]) => Promise<React.ReactNode> | React.ReactNode;
  } = {
    help: async (args) => {
      const helpText = await getHelp({ command: args.join(" ") });
      return <pre className="whitespace-pre-wrap">{helpText}</pre>;
    },
    about: () => <About />,
    projects: () => <Projects />,
    experience: () => <Experience />,
    welcome: () => <Welcome />,
    ls: () => (
      <div>
        <p>Available commands:</p>
        <ul className="list-disc list-inside">
          {SUGGESTED_COMMANDS.map((cmd) => (
            <li key={cmd}>{cmd}</li>
          ))}
        </ul>
      </div>
    ),
    cd: () => `Navigation is handled by commands like 'about', 'projects', etc.`,
    whoami: () => "guest",
  };

  const processCommand = async (terminalInput: string) => {
    const [command, ...args] = terminalInput.toLowerCase().split(" ");
    if (command === "clear") {
      setHistory([]);
      return;
    }

    const commandHandler = commands[command];
    let outputNode: React.ReactNode;

    if (commandHandler) {
      const result = commandHandler(args);
      outputNode = result instanceof Promise ? await result : result;
    } else {
      outputNode = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { id: prev.length, input: terminalInput, output: outputNode }]);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isProcessing) return;

    setIsProcessing(true);
    await processCommand(trimmedInput);
    setInputValue("");
    setIsProcessing(false);
  };
  
  const handleSuggestionClick = (command: string) => {
    setInputValue(command);
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full max-w-5xl h-[85vh] md:h-[70vh] bg-card text-card-foreground border border-border rounded-lg shadow-2xl flex flex-col font-code"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-none px-4 py-2 border-b border-border flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <p className="text-sm ml-auto text-muted-foreground">user@termfolio</p>
      </div>

      <div ref={containerRef} className="flex-grow p-4 overflow-y-auto">
        {history.map((item) => (
          <div key={item.id} className="mb-4 last:mb-0">
            {item.input && (
              <div className="flex items-center">
                <span className="text-accent font-bold">user@termfolio</span>
                <span className="text-muted-foreground">:~$</span>
                <span className="ml-2 text-primary">{item.input}</span>
              </div>
            )}
            <div className="text-foreground whitespace-pre-wrap leading-relaxed">
              {item.output}
            </div>
          </div>
        ))}
         {isProcessing && <div className="text-muted-foreground">Processing...</div>}
      </div>

      <div className="flex-none p-2 border-t border-border">
        <form onSubmit={handleFormSubmit}>
          <div className="flex items-center">
            <label htmlFor="command-input" className="flex items-center shrink-0">
              <span className="text-accent font-bold">user@termfolio</span>
              <span className="text-muted-foreground">:~$</span>
            </label>
            <div className="relative flex-1 ml-2">
              <span className="text-foreground">{inputValue}</span>
              {!isProcessing && (
                <span className="inline-block w-2 h-4 ml-1 bg-foreground cursor-blink"></span>
              )}
              <Input
                id="command-input"
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isProcessing}
                className="absolute inset-0 w-full h-full bg-transparent border-none opacity-0 p-0 m-0 cursor-default focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
                autoComplete="off"
              />
            </div>
          </div>
        </form>
        <div className="mt-2 flex flex-wrap gap-2">
          {SUGGESTED_COMMANDS.map((cmd) => (
            <Button
              key={cmd}
              variant="ghost"
              size="sm"
              className="text-accent hover:bg-accent/10 hover:text-accent h-auto px-2 py-1"
              onClick={() => handleSuggestionClick(cmd)}
            >
              {cmd}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
