import { z } from "zod";
import { userSchema } from "../schemas/user";
import { teacherSchema } from "../schemas/teachers";

export type User = z.infer<typeof userSchema>;

export type Teacher = z.infer<typeof teacherSchema>;

export type Class = {
  id: string;
  name: string;
};

export type Department = {
  id: string,
  name: string,
  description?: string
}