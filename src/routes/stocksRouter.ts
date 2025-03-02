import { Request, Response, Router } from "express";
import {
  getStocksList,
  getStock,
  getSymbols,
} from "../controllers/stocksController";

export const stockRouter = Router();

/**
 * @swagger
 * /api/v1/stocks:
 *   get:
 *     summary: Retrieve a list of stocks
 *     description: Fetch all stocks from the database
 *     responses:
 *       200:
 *         description: A list of stocks.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *       500:
 *         description: Internal server error
 */

stockRouter.get("/symbols", getSymbols);
stockRouter.get("/:symbol", getStock);
stockRouter.get("/", getStocksList);
