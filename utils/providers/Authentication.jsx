import React from "react";
import AccountProvider from "./AccountProvider";
import { getMe } from "@/app/actions";

const Authentication = async ({ children }) => {
  const user = await getMe();



  return (
    <>
      <AccountProvider Account={user?.username ? user : false}>{children}</AccountProvider>
    </>
  );
};

export default Authentication;
