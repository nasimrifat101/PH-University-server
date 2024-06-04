import { userServices } from "./user.service";
import sendRes from "../../utils/sendRes";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
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
});

export const userController = {
  createStudent,
};
