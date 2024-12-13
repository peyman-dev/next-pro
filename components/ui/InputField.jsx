"use client";
import React from "react";

const InputField = ({ placeholder, icon, valueSave, ...props }) => {
  const handler = (event) => valueSave(event.target.value);

  return (
    <div className="my-2 w-full duration-150 focus-within:ring-4 overflow-hidden dark:bg-white/5 ring-indigo-400 text-sm dark:ring-indigo-600/50 h-10 rounded-md border dark:border-white/10 relative">
      <input
        {...props}
        placeholder={placeholder}
        onChange={handler}
        className="w-full bg-transparent shadow-inner shadow-zinc-100/70 dark:shadow-transparent placeholder:!text-zinc-500 placeholder:text-sm  absolute h-full px-4 outline-none"
        autoComplete="billing home tel-local-suffix webauthn"
      />
      <span className="absolute left-4 text-sm text-zinc-600">{icon}</span>
    </div>
  );
};

export default InputField;
