import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.routes";

const router = Router();

router.use("/students", studentRoutes);
router.use("/users", userRoutes);

export default router;
