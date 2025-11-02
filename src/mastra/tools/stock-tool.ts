import { createTool } from "@mastra/core/tools";
import { z } from "zod";
import axios from "axios";

export const getStockTool = createTool({
  id: "Get FAANG stocks",
  description: "Get current stock prices for MAMAA stocks",
  inputSchema: z.object({
    symbol: z.string().describe("Symbol of stock"),
  }),
  outputSchema: z.object({
    symbol: z.string().describe("Stock symbol"),
    price: z.number().describe("Stock price"),
  }),
  execute: async ({ context }) => {
    return await getStockInfo(context.symbol);
  },
});

export const getStocksTool = createTool({
  id: "Get FAANG stocks",
  description: "Get current stock prices for MAMAA stocks",
  inputSchema: z.object({
    symbols: z.array(z.string().describe("Symbol of stock")),
  }),
  outputSchema: z.array(
    z.object({
      symbol: z.string().describe("Stock symbol"),
      price: z.number().describe("Stock price"),
    }),
  ),
  execute: async ({ context }) => {
    return await getStocksInfo(context.symbol);
  },
});

export const analyzeTrendTool = createTool({
  id: "Analyze stock trend",
  description: "Analyze stock trend",
  inputSchema: z.object({
    symbols: z.array(z.string().describe("Symbol of stock")),
  }),
  outputSchema: z.array(
    z.object({
      symbol: z.string().describe("Stock symbol"),
      trend: z.number().describe("Stock trend"),
    }),
  ),
  execute: async ({ context }) => {
    return await stockTrendAnalysis(context.symbols);
  },
});

const getStockInfo = async (symbol: string) => {
  const stocksUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`;
  const response = await axios.get(stocksUrl);
  return response.data;
};

const getStocksInfo = async (symbols: string[]) => {
  const promises = symbols.map(async (symbol) => {
    const stockInfo = await getStockInfo(symbol);
    return stockInfo;
  });
  const results = await Promise.all(promises);
  return results;
};

const stockTrendAnalysis = async (symbols: string[]) => {
  const promises = symbols.map(async (symbol) => {
    const stockInfo = await getStockInfo(symbol);
    const data = stockInfo["Time Series (Daily)"];
    const prices = Object.values(data).map((day) =>
      parseFloat(day["4. close"]),
    );
    const trend = prices.reduce((acc, price) => acc + price, 0);
    return { symbol, trend };
  });
  const results = await Promise.all(promises);
  return results;
};
