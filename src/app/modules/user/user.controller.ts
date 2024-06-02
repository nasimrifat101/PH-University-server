import { Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response): Promise<void> => {
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

    const result = await userServices.createStudentIntoDB(password, studentData as any);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "User creation failed",
      data: err,
    });
  }
};

export const userController = {
  createStudent,
};
