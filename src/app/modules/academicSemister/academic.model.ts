import { Schema, model } from "mongoose";
import { TAcademicSemester } from "./academic.interface";
import { AcademicCode, AcademicName, Months } from "./academic.constant";

const academicSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: AcademicName,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicCode,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: Months,
    required: true,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSchema
);
