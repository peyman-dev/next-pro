"use client";
import { redirect } from "next/navigation";
import React from "react";

const RedirectButton = ({ to }) => {
  return (
    <button
      onClick={() => redirect(to)}
      className="px-4 py-2 rounded-sm hover:bg-opacity-90 bg-white text-zinc-900 font-YekanBakh-Bold focus-within:ring-4 ring-white/40"
    >
      بازگشت
    </button>
  );
};

export default RedirectButton;
