import express from "express";
import { departmentController } from "./department.Controller";
import { validateReq } from "../../utils/validateReq";
import { departmentValidation } from "./department.validation";
const router = express.Router();

router.get("/", departmentController.getDepartment);
router.post("/", validateReq(departmentValidation), departmentController.createDepartment);
router.get("/:id", departmentController.getSingleDepartment);

export { router as departmentRoutes };
