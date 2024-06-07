import { Schema, model } from "mongoose";
import { TFaculty } from "./faculty.interface";

const facultySchema = new Schema<TFaculty>(
  {
    name: {
      String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const FacultyModel = model<TFaculty>("Faculty", facultySchema);
