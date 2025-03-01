import { Router } from "express";
import {
  addStockToWatchlist,
  getWatchlistStocks,
} from "../controllers/watchlistController";

export const watchlistRouter = Router();

/**
 * @swagger
 * /api/v1/watchlist:
 *   get:
 *     summary: Retrieve a list of watchlist stocks
 *     description: Fetch all watchlist stocks from the database
 *     responses:
 *       200:
 *         description: A list of watchlist stocks.
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
watchlistRouter.get("/", getWatchlistStocks);

/**
 * @swagger
 * /api/v1/watchlist/add:
 *   post:
 *     summary: Add a stock to watchlist
 *     description: Add a stock to the watchlist
 *     responses:
 *       200:
 *         description: Stock added to watchlist successfully.
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
 *                   type: object
 *                   properties:
*                       id:
*                         type: number
*                       name:
*                         type: string
*                       email:
*                         type: string
 *       500:
 *         description: Internal server error
 */
watchlistRouter.post("/add", addStockToWatchlist);
