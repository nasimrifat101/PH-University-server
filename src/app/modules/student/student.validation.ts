import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNumber: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNumber: z.string().min(1),
  address: z.string().min(1),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNumber: z.string().min(1),
  address: z.string().min(1),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(["male", "female"]),
      dateOfBirth: z.date().optional(),
      email: z.string().email(),
      contactNumber: z.string().min(1),
      emergencyContactNumber: z.string().min(1),
      presentAddress: z.string().min(1),
      permanentAddress: z.string().min(1),
      bloodGroup: z
        .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
        .optional(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
 createStudentValidationSchema,
};
