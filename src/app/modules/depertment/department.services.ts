import { TDepartment } from "./department.interface";
import { departmentModel } from "./department.model";

const getDepartmentFromDB = async () => {
  const result = await departmentModel.find();
  return result;
};

const createDepartmentIntoDB = async (payload: TDepartment) => {
  const result = await departmentModel.create(payload);
  return result;
};

const getSingleDepartmentFromDB = async (id: string) => {
  const result = await departmentModel.findById(id);
  return result;
};

export const departmentServices = {
  createDepartmentIntoDB,
  getSingleDepartmentFromDB,
  getDepartmentFromDB
};
