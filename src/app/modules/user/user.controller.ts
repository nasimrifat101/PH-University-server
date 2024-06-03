import { Request, Response, NextFunction } from "express";
import { userServices } from "./user.service";
import sendRes from "../../utils/sendRes";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { student } = req.body;
    if (!student) {
      res.status(400).json({
        success: false,
        message: "Student data is required",
      });
      return;
    }
    const { password, ...studentData } = student;

    const result = await userServices.createStudentIntoDB(
      password,
      studentData as any
    );
    sendRes(res, {
      statusCode: 201,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const userController = {
  createStudent,
};
