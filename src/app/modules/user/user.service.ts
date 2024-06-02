import { ObjectId } from "mongodb";
import config from "../../config";
import { TStudent } from "../student/student.Interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  if (!studentData) {
    throw new Error("Student data is undefined or null");
  }

  const userData: Partial<TUser> = {
    password: password || (config.default_pass as string),
    role: "student",
    id: studentData.id || "20300100001", // This should be dynamically generated or fetched
  };

  // Create a user
  const newUser = await User.create(userData);

  if (newUser) {
    studentData.id = newUser.id;
    studentData.user = newUser._id as ObjectId;

    console.log("Student data before creation:", studentData);

    try {
      // Create a new student
      const newStudent = await Student.create(studentData);
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
