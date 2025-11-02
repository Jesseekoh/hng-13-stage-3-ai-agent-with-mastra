import { Agent } from "@mastra/core/agent";
import {
  getStockTool,
  getStocksTool,
  analyzeTrendTool,
} from "../tools/stock-tool";
import { Memory } from "@mastra/memory";
import { LibSQLStore } from "@mastra/libsql";

export const stockAgent = new Agent({
  model: "google/gemini-2.5-flash",
  name: "Stock Agent",
  instructions: `
  you are a stock agent. Your task is to provide accurate and up-to-date information about stocks prices. You should only provide information on MAMAA related stocks like price and summarize market trends.

  Your responsibilities:
  1. Fetch current stock prices for all MAMAA companies
  2. Analyze performance trends
  3. Provide insights on price movements
  4. Compare relative performance across MAMAA stocks
  5. Present data in a clear, actionable format
  6. Provide trend analysis for MAMAA stocks. This should include a detailed analysis of the stock's performance over a specific period, highlighting key trends and patterns and should be about 3 sentences long.

  For a single Symbol, call getStockTool, for two or more symbols, call the getStocksTool
  `,
  tools: { getStockTool, getStocksTool, analyzeTrendTool },
  memory: new Memory({
    storage: new LibSQLStore({ url: "file:../mastra.db" }),
  }),
});
