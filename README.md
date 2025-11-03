# hng-13-stage-3-ai-agent-with-mastra

## links
Telex coworker name - Cassian Andor
Agent A2A url - https://orange-tinkling-television.mastra.cloud/a2a/agent/stockAgent
Blog Post - https://dev.to/jesseekoh/my-first-ai-agent-with-mastra-ai-37ih

## FAANG/MAMAA Stock Monitor Agent

## Overview

This project is an AI agent that provides real-time stock information and trend analysis for MAMAA (Meta, Apple, Microsoft, Amazon, Alphabet) companies. It is built with the Mastra framework and utilizes the Google Gemini API for its AI capabilities and the Alpha Vantage API for stock data.

## Tech Stack

- **Framework:** Mastra
- **AI Model:** Google Gemini
- **Stock Data API:** Alpha Vantage
- **Language:** TypeScript
- **Package Manager:** pnpm

## Project Structure

```
.
├── src
│   └── mastra
│       ├── agents
│       │   └── stock-agent.ts  // Defines the core AI agent
│       └── tools
│           └── stock-tool.ts   // Contains tools for fetching and analyzing stock data
├── .env                        // Environment variables (needs to be created)
├── package.json                // Project dependencies and scripts
└── README.md                   // Project documentation
```

## Installation and Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd hng-13-stage-3-ai-agent-with-mastra
    ```

3.  **Install the dependencies:**

    ```bash
    pnpm install
    ```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables. You will need to obtain API keys from [Google AI Studio](https://aistudio.google.com/) and [Alpha Vantage](https://www.alphavantage.co/).

```
GOOGLE_GENERATIVE_AI_API_KEY="your_gemini_api_key"
ALPHAVANTAGE_API_KEY="your_alphavantage_api_key"
```

## Usage

To start the development server, run the following command:

```bash
pnpm dev
```

This will start the Mastra server and make the agent available for interaction.
