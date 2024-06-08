import express from "express";
import { facultyController } from "./faculty.controller";
import { validateReq } from "../../utils/validateReq";
import { facultyValidation } from "./faculty.validation";

const router = express.Router();

router.get("/", facultyController.getAllFaculty);
router.post(
  "/",
  validateReq(facultyValidation),
  facultyController.createFaculty
);
router.get("/:id", facultyController.getSingleFaculty);
router.patch("/:id", facultyController.upgradeFaculty);

export { router as facultyRoutes };
