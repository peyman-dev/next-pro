import RegisterForm from "@/components/ui/pages/Auth/Register/RegisterForm";
import React from "react";
import { register } from "@/app/actions";

const page = () => {
  return <RegisterForm register={register} />;
};

export default page;
