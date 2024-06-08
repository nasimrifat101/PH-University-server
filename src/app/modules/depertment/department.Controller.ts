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














export const departmentController = {
    createDepartment
}