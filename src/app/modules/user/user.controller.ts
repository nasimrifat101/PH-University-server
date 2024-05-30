import { Request, Response } from "express";
import { userServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, user: userData } = req.body;

    const result = await userServices.createStudentIntoDB(userData, password);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "User create failed",
      data: err,
    });
  }
};

export const userController = {
  createStudent,
};
