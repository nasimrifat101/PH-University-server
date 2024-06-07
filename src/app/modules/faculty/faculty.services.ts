import { TFaculty } from "./faculty.interface";
import { FacultyModel } from "./faculty.model";

const createFacultyIntoDB = async (payload: TFaculty) => {
  const result = await FacultyModel.create(payload);
  return result;
};

const getAllFacultyFromDB = async () => {
  const result = await FacultyModel.find();
  return result;
};

const getSingleFacultyFromDB = async (id: string) => {
  const result = await FacultyModel.findById(id);
  return result;
};

const updateFaculty = async (id: string, payload: TFaculty) => {
  const result = await FacultyModel.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    { new: true }
  );
  return result;
};

export const facultyServices = {
  createFacultyIntoDB,
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  updateFaculty
};
