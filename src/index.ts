import express, { Request, Response } from "express";
import { stockRouter } from "./routes/stocksRouter";
import { watchlistRouter } from "./routes/watchlistRouter";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { setupSwagger } from "./config/swagger";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

setupSwagger(app);

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
app.use(helmet());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/stocks", stockRouter);
app.use("/watchlist", watchlistRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
