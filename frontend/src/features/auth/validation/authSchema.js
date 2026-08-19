import { z } from "zod";

// Registration Schema
export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),

    lastName: z.string().min(1, "Last name is required"),

    email: z.string().min(1, "Email is required").email("Enter a valid email"),

    password: z.string().min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string().min(1, "Confirm password is required"),

    role: z.string().min(1, "Please select a role"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must be match",
    path: ["confirmPassword"],
  });

// Login Schema
export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email"),

  password: z.string().min(1, "Password is required"),
});
