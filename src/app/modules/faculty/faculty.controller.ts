import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { facultyServices } from "./faculty.services";

const createFaculty = catchAsync(async (req, res) => {
  const result = await facultyServices.createFacultyIntoDB(req.body);

  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req, res) => {
  const result = await facultyServices.getAllFacultyFromDB();
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});

const getSingleFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.body;
  const result = await facultyServices.getSingleFacultyFromDB(facultyId);

  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});

const upgradeFaculty = catchAsync(async (req, res) => {
  const { id } = req.body;
  const payload = req.body;

  const result = await facultyServices.updateFaculty(id, payload);
  sendRes(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty created successfully",
    data: result,
  });
});

export const facultyController = {
  createFaculty,
  getSingleFaculty,
  getAllFaculty,
  upgradeFaculty,
};
