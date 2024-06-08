import { z } from "zod";

export const departmentValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    academicfaculty: z.string().optional(),
  }),
});
