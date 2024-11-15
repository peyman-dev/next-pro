"use client";
import React from "react";
import { Poppins } from "next/font/google";

const Font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const useFont = () => {
  return Font;
};

export default useFont;
