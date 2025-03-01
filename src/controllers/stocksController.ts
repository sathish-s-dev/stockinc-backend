import { Request, Response } from "express";
import data from "../../db.json";
import { errorResponse, successResponse } from "../utils/response";





export const getStocksController = (req: Request, res: Response) => {
  res.json(successResponse("stocks fetched", data.stocks));
};
