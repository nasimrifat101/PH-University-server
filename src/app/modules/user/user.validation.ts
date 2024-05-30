import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20).min(8).optional(),
});

export const userValidation = {
  userValidationSchema,
};
