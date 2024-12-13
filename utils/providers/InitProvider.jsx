"use client";
import React, { useEffect } from "react";
import useThemeStore from "../stores/theme-store";
import Header from "@/components/layouts/local/Header/Header";
import { usePathname } from "next/navigation";

const InitProvider = ({ children }) => {
  const path = usePathname();
  const store = useThemeStore();

  const isPrivateRoute =
    String(path).startsWith("/admin") || String(path).startsWith("/panel");

  useEffect(() => {
    store.initializeTheme();
    window.scrollBy({
      top: 0,
      behavior: "smooth",
      
    })
  }, []);

  return (
    <>
      {!isPrivateRoute && <Header />}
      {children}
    </>
  );
};

export default InitProvider;
