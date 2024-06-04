import express, { Request, Response, NextFunction } from "express";
import { userController } from "./user.controller";
import { AnyZodObject } from "zod";
import { studentValidations } from "../student/student.validation";

const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (err) {
      next(err);
    }
  };
};

router.post(
  "/create-user",
  validateRequest(studentValidations.studentValidationSchema),
  userController.createStudent
);

export const userRoutes = router;
