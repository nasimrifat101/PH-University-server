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
    type: String,
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

academicSchema.pre("save", async function (next) {
  try {
    const isSemesterExists = await AcademicSemester.findOne({
      year: this.year,
      name: this.name,
    });

    if (isSemesterExists) {
      throw new Error("Semester already exists");
    }

    next();
  } catch (err:any) {
    next(err); 
  }
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSchema
);
