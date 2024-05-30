import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20).min(8),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "block"]).default("in-progress"),
  isDeleted: z.boolean().default(false),
});

export const userValidation = {
  userValidationSchema,
};
