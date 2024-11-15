"use client";
import React, { useEffect } from "react";
import useThemeStore from "../stores/theme-store";
import Header from "@/components/layouts/local/Header/Header";

const InitProvider = ({ children }) => {
  const store = useThemeStore();

  useEffect(() => {
    store.initializeTheme();
  }, []);

  return (
    <>
      {children}

      <Header />
    </>
  );
};

export default InitProvider;
