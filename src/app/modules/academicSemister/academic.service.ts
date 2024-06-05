import { TAcademicSemester } from "./academic.interface";
import { AcademicSemester } from "./academic.model";

const createAcademicIntoDB = async (payload: TAcademicSemester) => {
  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicService = {
  createAcademicIntoDB,
};
