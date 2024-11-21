import { loginSchema, registerSchema } from "@/lib/schema";
import { z } from "zod";

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;
