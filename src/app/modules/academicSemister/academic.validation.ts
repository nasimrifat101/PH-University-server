import { z } from "zod";


const academicValidation = z.object({
    body: z.object({
        name: z.enum(["Autumn", "Summer", "Fall"])
    }),

})