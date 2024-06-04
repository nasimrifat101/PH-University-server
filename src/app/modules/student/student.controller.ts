import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";

const getAllStudents: RequestHandler = async (req, res, next) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const result = studentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: `Student with id ${studentId} retrieved successfully`,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const result = studentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: `Student with id ${studentId} deleted successfully`,
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
