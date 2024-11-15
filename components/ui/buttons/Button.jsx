import React from "react";

const Button = ({ children, icon, action, ...props }) => {
  return (
    <button
      onClick={action}
      className="bg-zinc-900 dark:bg-zinc-800 text-white px-4 py-1.5 rounded-md font-medium
               transition-all duration-300 ease-in-out
               hover:bg-zinc-800 flex items-center gap-2 hover:shadow-lg border-none
               outline-none focus:ring-4 ring-zinc-500 focus:ring-opacity-50"
      {...props}
    >
      <span>{children}</span>
      <span>{icon}</span>
    </button>
  );
};

export default Button;
