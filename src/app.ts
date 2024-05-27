import cors from "cors";
import express, { Application, Request, Response } from "express";
import { studentRoutes } from "./app/modules/student/student.route";
const app: Application = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Applications
app.use("/api/v1/students", studentRoutes);

export default app;
