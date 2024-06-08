import { z } from "zod";

export const departmentValidation = z.object({
  body: z.object({
    name: z.string(),
    academicfaculty: z.string(),
  }),
});
