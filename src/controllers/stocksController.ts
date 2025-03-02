import { Request, Response } from "express";
import data from "../../db.json";
import { errorResponse, successResponse } from "../utils/response";

// get all stocks
export const getStocksList = (req: Request, res: Response) => {
  const query = req.query;
  console.log(query);
  const limit = query.limit;
  if (!limit) {
    data.stocks = data.stocks.slice(0, data.stocks.length - 1);
    res.json(successResponse("stocks fetched", data.stocks));
    return;
  }
  const stocks = data.stocks.slice(0, +limit);
  res.json(successResponse("stocks fetched", data.stocks));
};

// get single stock by symbol
export const getStock = (req: Request, res: Response) => {
  const { symbol } = req.params;
  const stock = data.stocks.find((stock) => {
    console.log(stock.symbol, symbol);
    return stock.symbol === symbol;
  });
  console.log(symbol, stock);
  if (stock) {
    res.json(successResponse("stock fetched", [stock]));
  } else {
    res.json(errorResponse("stock not found"));
  }
};

// get stock symbols
export const getSymbols = (req: Request, res: Response) => {
  // const { symbol } = req.params;
  const symbols = data.stocks.map((stock) => stock.symbol);
  console.log(symbols);
  res.json(successResponse("symbols fetched", symbols));
};
