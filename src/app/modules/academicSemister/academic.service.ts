import { mapper } from "./academic.constant";
import { TAcademicSemester } from "./academic.interface";
import { AcademicSemester } from "./academic.model";

const getAllAcademicFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const createAcademicIntoDB = async (payload: TAcademicSemester) => {
  if (mapper[payload.name] !== payload.code) {
    throw new Error("invalid");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicService = {
  createAcademicIntoDB,
  getAllAcademicFromDB,
};
