import { TAcademicSemester } from "./academic.interface";
import { AcademicSemester } from "./academic.model";

const createAcademicIntoDB = async (payload: TAcademicSemester) => {
  type TMapper = {
    [key: string]: string;
  };
  const mapper: TMapper = {
    Autumn: "01",
    Summer: "02",
    Fall: "02",
  };

  if (mapper[payload.name] !== payload.code) {
    throw new Error("invalid");
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicService = {
  createAcademicIntoDB,
};
