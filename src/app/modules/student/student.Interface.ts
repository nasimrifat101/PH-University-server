import { Types } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNumber: string;
  motherName: string;
  motherOccupation: string;
  motherContactNumber: string;
  address: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNumber: string;
  address: string;
};

export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type TStudent = {
  id: string;
  user: Types.ObjectId;
  password: string;
  name: TUserName;
  gender: "male" | "female";
  email: string;
  dateOfBirth?: string;
  contactNumber: string;
  emergencyContactNumber: string;
  presentAddress: string;
  permanentAddress: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImg?: string;
 
  isDeleted: boolean;
};
