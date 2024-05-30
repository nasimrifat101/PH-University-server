import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import {
  TGuardian,
  TLocalGuardian,
  TUserName,
  TStudent,
} from "./student.Interface";

// Schema for user names
const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

// Schema for guardian details
const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

// Schema for local guardian details
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

// Schema for student details
const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    maxlength: [20, "Password cannot be more than 20 characters long"],
  },
  name: { type: userNameSchema, required: true },
  gender: { type: String, enum: ["male", "female"], required: true },
  dateOfBirth: { type: String },
  email: { type: String, required: true, unique: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
  },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: { type: String },
  isActive: { type: String, enum: ["active", "block"], default: "active" },
  isDeleted: { type: Boolean, default: false },
});

// Pre-save middleware to hash passwords
studentSchema.pre("save", async function (next) {
  const user = this;

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );

  next();
});

// Post-save middleware to clear the password field
studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

// Query middleware to exclude deleted students
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
// Query middleware to exclude deleted students
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

// Exporting the Student model
export const Student = model<TStudent>("Student", studentSchema);
