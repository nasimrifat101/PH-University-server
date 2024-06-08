import { TDepartment } from "./department.interface";
import { departmentModel } from "./department.model";

const getAllDepartment = async () => {
  const result = await departmentModel.find();
  return result;
};

const createDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await departmentModel.create(payload);
  return result;
};

const getSingleDepartment = async (id: string) => {
  const result = await departmentModel.findById(id);
  return result;
};

export const departmentServices = {
  createDepartmentIntoDB,
  getSingleDepartment,
  getAllDepartment
};
