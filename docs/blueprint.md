# **App Name**: Termfolio

## Core Features:

- Terminal Display: Display portfolio sections within a terminal-style interface, simulating command-line navigation.
- Directory Navigation: Implement 'cd' command functionality to navigate between sections (about, projects, experience).
- Command Selection: Create a command selection box where users can select and execute commands, in addition to typing commands manually.
- Contextual Help: AI powered help command. When the user enters a command like `help`, use an LLM to choose between canned help output and dynamically generated help.  The LLM will act as a tool in providing the output to the user.

## Style Guidelines:

- Primary color: Use a vibrant lime green (#32CD32) for the terminal text and cursor, reminiscent of classic terminal interfaces.
- Background color: Employ a dark charcoal grey (#333333) to simulate the terminal background.
- Accent color: Choose a brighter shade of green (#98FF98), for active command highlighting and section titles.
- Font: 'Source Code Pro' (monospace) for the entire terminal interface to maintain a consistent, code-like appearance.  Suitable for all text display, since monospace looks best for a terminal emulator.
- Minimalist icons to represent commands and directories in the command selection box.
- Emulate a terminal window layout with a command input line at the bottom and content display above.
- Implement a blinking cursor animation and subtle text scrolling to mimic a real terminal.