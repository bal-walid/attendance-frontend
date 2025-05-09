import { getAllClasses } from "@/lib/services/classes";
import RegisterForm from "@/components/auth/RegisterForm";


export default async function Page() {
  const classes = await getAllClasses();
  return (
    <RegisterForm classes={classes}/>
  );
}