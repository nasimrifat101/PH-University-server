import express from "express";
import { AcademicController } from "./academic.controller";
import { validateReq } from "../../utils/validateReq";
import { academicValidation } from "./academic.validation";

const router = express.Router();

router.get("/", AcademicController.getAllAcademicSemester);

router.post(
  "/create-academic-semester",
  validateReq(academicValidation),
  AcademicController.createAcademicSemester
);

export { router as AcademicRoutes };
