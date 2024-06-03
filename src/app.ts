import cors from "cors";
import express, { Application, Request, Response } from "express";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Applications
app.use("/api/v1", router);

// Error-handling middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;
