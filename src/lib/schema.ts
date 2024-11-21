import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Wrong email"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Wrong email"),
  password: z.string().min(8, "Password is too short").max(50, "Password is too long"),
});
