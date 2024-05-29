import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
import {
  TGuardian,
  TLocalGuardian,
  TUserName,
  TStudent,
} from "./student.Interface";

const userNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNumber: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent>({
  id: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    maxlength: [20, "password cannot be more than 20 characters long"],
  },
  name: {
    type: userNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
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
  guardian: {
    type: guardianSchema,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "block"],
    default: "active",
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// pre save middleware
studentSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds)
    );
  }
  next();
});

// post save middleware
studentSchema.post("save", function (doc, next) {
  // console.log("post hook: we saved our data");
  doc.password = "";
  next();
});

// query middleware

studentSchema.pre('find', function(next){
  

  next()
})

export const Student = model<TStudent>("Student", studentSchema);
