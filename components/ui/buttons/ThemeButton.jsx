"use client";
import useThemeStore from "@/utils/stores/theme-store";
import React from "react";
import { HiMoon, HiSun } from "react-icons/hi2";

const ThemeButton = () => {
  const store = useThemeStore();
  const { toggle, isDark } = store;

  return (
    <button
     className="size-8 !duration-0 rounded-lg hover:dark:bg-zinc-800 hover:bg-zinc-100 flex-center"
      onClick={toggle}
    >
      {isDark ? <HiSun /> : <HiMoon />}
    </button>
  );
};

export default ThemeButton;
