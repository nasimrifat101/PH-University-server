import { z } from "zod";

export const facultyValidation = z.object({
  body: z.object({
    name: z.string(),
  }),
});
