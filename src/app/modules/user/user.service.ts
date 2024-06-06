import { ObjectId } from "mongodb";
import config from "../../config";
import { TStudent } from "../student/student.Interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { AcademicSemester } from "../academicSemister/academic.model";
import { generateStudentId } from "./users.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  if (!payload) {
    throw new Error("Student data is undefined or null");
  }

  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_pass as string);
  userData.role = "student";
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester
  );

  if (!admissionSemester) {
    throw new Error("Admission semester not found");
  }

  userData.id = generateStudentId(admissionSemester);

  // Create a user
  const newUser = await User.create(userData);

  if (newUser) {
    payload.id = newUser.id;
    payload.user = newUser._id as ObjectId;

    console.log("Student data before creation:", payload);

    try {
      // Create a new student
      const newStudent = await Student.create(payload);
      console.log("New student created:", newStudent);
      return newStudent;
    } catch (error) {
      console.error("Error creating student:", error);
      throw error;
    }
  } else {
    throw new Error("Failed to create user");
  }
};

export const userServices = {
  createStudentIntoDB,
};
