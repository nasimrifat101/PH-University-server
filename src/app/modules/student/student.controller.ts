import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "Students retrieved successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: `Student with id ${studentId} retrieved successfully`,
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: `Student with id ${studentId} deleted successfully`,
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
