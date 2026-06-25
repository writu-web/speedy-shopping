import { z } from "zod";

export const RegisterSchema = z
  .object({
    username: z.string().min(3, { message: "Username should have 3 letters" }),
    email: z.email({ message: "Please enter a valid email id" }),
    password: z
      .string()
      .min(6, "Password must have 6 letters")
      .max(8, "Password should have max 8 letters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;
