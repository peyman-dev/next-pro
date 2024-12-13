import React from "react";
import LinkScript from "next/link";

const Link = ({ href, children, ...props }) => {
  return (
    <LinkScript
      {...props}
      className="flex items-center gap-1.5 darlbg-white px-3 py-1 bg-indigo-700 text-white dark:text-black rounded-md dark:hover:bg-white/90 duration-150 focus-within:ring-4 font-YekanBakh-Medium text-sm dark:ring-white/50"
      href={href}
    >
      {children}
    </LinkScript>
  );
};

export default Link;
