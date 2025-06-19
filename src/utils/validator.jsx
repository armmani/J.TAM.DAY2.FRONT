// Validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Incorrect Email").required("Enter your Email"),
  name: string().min(2, "Name must be at least 2 letters"),
  password: string().min(6, "Password must be at least 6 letters"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password is not Matched"
  ),
});

export const loginSchema = object({
  email: string().email("Incorrect Email").required("Enter your Email"),
  password: string().min(6, "Password must be at least 6 letters"),
});