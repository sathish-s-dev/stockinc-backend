import { Request, Response } from "express";
import data from "../../db.json";
import { errorResponse, successResponse } from "../utils/response";
import { Stock } from "../types";
import { write, writeFileSync } from "fs";

const getWatchlistStocks = (req: Request, res: Response) => {
  res.json(successResponse("watchlist fetched", data.watchlist));
};

const addStockToWatchlist = (req: Request, res: Response) => {
  const { symbol } = req.params;
  let watchlist: Stock | undefined;
  if (!symbol) {
    res.json(errorResponse("stock symbol is required"));
    return;
  }
  if (data.watchlist.find((stock) => stock.symbol === symbol)) {
    res.json(errorResponse("stock already in watchlist"));
    return;
  }
  watchlist = data.stocks.find(
    (stock) => stock.symbol.toLowerCase() === symbol.toLowerCase()
  );
  if (!watchlist) {
    res.json(errorResponse("stock not found"));
    return;
  }

  data.watchlist.push(watchlist);
  writeFileSync("db.json", JSON.stringify(data));
  res.json(successResponse("stock added to watchlist", watchlist));
};

const removeStockToWatchlist = (req: Request, res: Response) => {
  const { symbol } = req.params;
  let watchlist: Stock | undefined;
  if (!symbol) {
    res.json(errorResponse("stock symbol is required"));
    return;
  }
  if (data.watchlist.find((stock) => stock.symbol === symbol)) {
    res.json(errorResponse("stock already in watchlist"));
    return;
  }
  watchlist = data.stocks.find(
    (stock) => stock.symbol.toLowerCase() === symbol.toLowerCase()
  );
  if (!watchlist) {
    res.json(errorResponse("stock not found"));
    return;
  }
  const filteredWatchlist = data.watchlist.filter(
    (stock) => stock.symbol !== symbol
  );
  data.watchlist = filteredWatchlist;
  writeFileSync("db.json", JSON.stringify(data));
  res.json(successResponse("stock removed from watchlist", watchlist));
};

export { getWatchlistStocks, addStockToWatchlist, removeStockToWatchlist };
