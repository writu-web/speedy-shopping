import { z } from "zod";

export const loginSchema = z.object({
  email: z.email({ message: "Please enter a valid email id" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
