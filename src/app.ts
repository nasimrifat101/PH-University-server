import cors from "cors";
import express, { Application, Request, Response, NextFunction } from "express";
import { studentRoutes } from "./app/modules/student/student.route";
import { userRoutes } from "./app/modules/user/user.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Applications
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/users", userRoutes);

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err) {
    message = err.message;
    statusCode = err.status || 500;
  }

  res.status(statusCode).json({
    success: false,
    message,
    data: err,
  });
});

export default app;
