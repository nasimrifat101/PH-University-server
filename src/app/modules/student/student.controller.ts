import { Request, Response } from "express";
import { studentServices } from "./student.service";




const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Student retrieve failed",
      data: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: `Student with id ${studentId} retrieved successfully`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Student retrieve failed",
      data: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = studentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: `Student with id ${studentId} deleted successfully`,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Student delete failed",
      data: err,
    });
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
