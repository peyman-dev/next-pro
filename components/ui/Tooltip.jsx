"use client";

import classNames from "classnames";
import React, { useState } from "react";

const Tooltip = ({ children, content, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const styles = classNames(
    "absolute text-sm p-2 rounded-md bg-zinc-900 dark:bg-zinc-950 text-white min-w-max",
    "transform -translate-x-1/2 left-1/2",
    "transition-opacity duration-300",
    {
      "opacity-0 hidden ": !isVisible,
      "opacity-100": isVisible,
      "-top-12": position === "top",
      "bottom-12": position === "bottom",
    },
    "after:content-[''] dark:after:border-t-zinc-950 after:absolute after:left-1/2 after:-translate-x-1/2",
    "after:border-8 after:border-transparent",
    {
      "after:-bottom-4 after:border-t-zinc-900": position === "top",
      "after:-top-4 after:border-b-zinc-900": position === "bottom",
    }
  );

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative inline-block"
    >
      <div className={styles}>{content}</div>
      {children}
    </div>
  );
};

export default Tooltip;
