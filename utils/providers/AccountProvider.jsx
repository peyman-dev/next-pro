"use client";
import React, { useEffect } from "react";
import useUserStore from "../stores/user-store";

const AccountProvider = ({ Account, children }) => {
  const { setUser, user } = useUserStore();

  useEffect(() => {
    if (Account) {
      setUser(Account);
    }
  }, [Account]);

  return <>{children}</>;
};

export default AccountProvider;
