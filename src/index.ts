import express, { Request, Response } from "express";
import { stockRouter } from "./routes/stocksRouter";
import { watchlistRouter } from "./routes/watchlistRouter";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { setupSwagger } from "./config/swagger";
import checkApiKey from "./middlewares/checkApiKey";
import rateLimit from "express-rate-limit";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

setupSwagger(app);

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://stockinc.vercel.app/"],
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );
app.use(
  cors({
    origin: ["http://localhost:5173", "https://stockinc.vercel.app"], // No trailing slash
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // Allow cookies and Authorization headers
  })
);

app.use(helmet());
app.use(morgan("dev"));

// Apply rate limiting globally
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  headers: true, // Include rate limit info in headers
});

// Apply rate limiting to all routes globally
app.use(limiter);

// middlware for checking API key
app.use(checkApiKey);

// Routes
app.use("/stocks", stockRouter);
app.use("/watchlist", watchlistRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
