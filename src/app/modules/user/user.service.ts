import config from "../../config";
import { TStudent } from "../student/student.Interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  let userData: Partial<TUser> = {};

  userData.password = password || (config.default_pass as string);
  userData.role = "student";
  userData.id = "20300100001";

  //   create a user
  const newUser = await User.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }

};

export const userServices = {
  createStudentIntoDB,
};
