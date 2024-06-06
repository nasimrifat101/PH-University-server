import sendRes from "../../utils/sendRes";
import catchAsync from "../../utils/catchAsync";
import { academicService } from "./academic.service";

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicService.getAllAcademicFromDB();
  sendRes(res, {
    statusCode: 201,
    success: true,
    message: "Academic semester created successfully",
    data: result,
  });
});

const createAcademicSemester = catchAsync(async (req, res) => {
  const academic = req.body;

  const result = await academicService.createAcademicIntoDB(academic);

  sendRes(res, {
    statusCode: 201,
    success: true,
    message: "Academic semester created successfully",
    data: result,
  });
});

export const AcademicController = {
  createAcademicSemester,
  getAllAcademicSemester,
};
