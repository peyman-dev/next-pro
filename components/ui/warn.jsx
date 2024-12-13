"use client";
import classNames from "classnames";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { ImWarning } from "react-icons/im";

const Warn = ({ children, ...props }) => {
  const [show, setShow] = useState(true);

  const propsCn = props["className"] || "";

  const cn = classNames(
    `flex h-8 text-sm  px-6 items-center font-YekanBakh-Medium cursor-pointer select-none rounded-md justify-between  border border-red-500/20 text-red-500 duration-150 hover:bg-red-600/5 ${propsCn}`
  );

  if (show) {
    return (
      <div onClick={() => setShow(!show)} {...props} className={cn}>
        <div className="flex items-center gap-1">
          <span className="ml-2 size-6 rounded-md flex-center bg-red-500/10">
            <ImWarning />
          </span>
          <p className="pt-0.5">{children}</p>
        </div>
        <button className="text-sm mr-5">
          <GrClose className="text-xs" />
        </button>
      </div>
    );
  }
};

export default Warn;
