import { Request, Response } from "express";
import data from "../../db.json";
import { successResponse } from "../utils/response";
import { Stock } from "../types";
import { write, writeFileSync } from "fs";

const getWatchlistStocks = (req: Request, res: Response) => {
  res.json(successResponse("watchlist fetched", data.watchlist));
};

const addStockToWatchlist = (req: Request, res: Response) => {
  const watchlist: Stock = req.body;
  data.watchlist.push(req.body);
  writeFileSync("db.json", JSON.stringify(data));
  res.json(successResponse("stock added to watchlist", watchlist));
};

export { getWatchlistStocks, addStockToWatchlist };
