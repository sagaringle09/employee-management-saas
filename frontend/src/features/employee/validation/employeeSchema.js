import z from "zod";

export const employeeSchema = z.object({
  employeeCode: z.string().min(1, "Employee code is required"),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  department: z.string().min(1, "Department is required"),
  designation: z.string().min(1, "Designation is required"),
  salary: z.coerce.number().positive("Salary must be greater than 0"),
  joiningDate: z.string().min(1, "Joining date is required"),
});
