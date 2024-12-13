import { login } from "@/app/actions";
import LoginForm from "@/components/ui/pages/Auth/Login/LoginForm";
import React from "react";

const page = async () => {
  return <LoginForm login={login} />;
};

export default page;
