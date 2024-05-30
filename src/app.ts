import cors from "cors";
import express, { Application, Request, Response } from "express";
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

export default app;
