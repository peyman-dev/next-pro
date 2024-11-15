import React from "react";

const InputField = ({ placeholder, icon, valueSave, ...props }) => {
  const handler = (value) => valueSave(value);

  return (
    <div className="my-2 w-full duration-150 focus-within:ring-4 overflow-hidden ring-indigo-400 text-sm dark:ring-indigo-600/50 h-10 rounded-md border dark:border-white/10 relative">
      <input
        {...props}
        placeholder={placeholder}
        onChange={({ target }) => {
          const { value } = target;
          handler(value);
        }}
        type="text"
        className="w-full bg-transparent shadow-inner shadow-zinc-100/70 dark:shadow-transparent  absolute h-full placeholder:text-sm px-4 outline-none"
        autoComplete="billing home tel-local-suffix webauthn"
      />
      <span className="absolute left-4 text-sm text-zinc-600">{icon}</span>
    </div>
  );
};

export default InputField;
