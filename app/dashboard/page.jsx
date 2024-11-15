import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  console.log("Hello world")

  console.log(accessToken ? true : false)
  
  if (!accessToken) redirect("/auth/login");

  return <div>page</div>;
};

export default page;
