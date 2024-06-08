import { Schema, model } from "mongoose";
import { TDepartment } from "./department.interface";

export const departmentSchema = new Schema<TDepartment>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    academicfaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicFaculty",
    },
  },
  {
    timestamps: true,
  }
);

export const departmentModel = model<TDepartment>(
  "Department",
  departmentSchema
);
