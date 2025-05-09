import { z } from "zod";
import { userSchema } from "../schemas/user";
import { teacherSchema } from "../schemas/teachers";
import { studentSchema } from "../schemas/students";

export type User = z.infer<typeof userSchema>;
export type Teacher = z.infer<typeof teacherSchema>;
export type Student = z.infer<typeof studentSchema> & { latest_image? : StudentImage}

export type Class = {
  id: string;
  name: string;
  studentCount?: number
};

export type Department = {
  id: string,
  name: string,
  description?: string,
  teacherCount?: number
}

export type StudentImage = {
  id: string,
  image: string,
  is_encoded: boolean,
}