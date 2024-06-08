import catchAsync from "../../utils/catchAsync";
import sendRes from "../../utils/sendRes";
import { departmentServices } from "./department.services";

const createDepartment = catchAsync(async (req, res) => {
  const result = await departmentServices.createDepartmentIntoDB(req.body);
  sendRes(res, {
    statusCode: 201,
    success: true,
    message: "Department created successfully",
    data: result,
  });
});

const getDepartment = catchAsync(async (req, res) => {
  const result = await departmentServices.getDepartmentFromDB();
  sendRes(res, {
    statusCode: 200,
    success: true,
    message: "Department created successfully",
    data: result,
  });
});

const getSingleDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.body;

  const result = await departmentServices.getSingleDepartmentFromDB(
    departmentId
  );
  sendRes(res, {
    statusCode: 200,
    success: true,
    message: "Department created successfully",
    data: result,
  });
});

export const departmentController = {
  createDepartment,
  getDepartment,
  getSingleDepartment,
};
