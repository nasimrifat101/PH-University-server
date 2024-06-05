import { z } from "zod";
import { AcademicCode, AcademicName, Months } from "./academic.constant";
import { TAcademicName } from "./academic.interface";

export const academicValidation = z.object({
  body: z.object({
    name: z.enum([...AcademicName] as [string, ...string[]]),
    year: z.date(),
    code: z.enum([...AcademicCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});
