import express from "express";
import { userController } from "./user.controller";
import { studentValidations } from "../student/student.validation";
import { validateReq } from "../../utils/validateReq";

const router = express.Router();

router.post(
  "/create-user",
  validateReq(studentValidations.createStudentValidationSchema),
  userController.createStudent
);

export const userRoutes = router;
