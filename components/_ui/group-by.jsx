"use client";
import classNames from "classnames";
import React from "react";

const GroupBy = ({ options = [], setActiveGroup, activeGroup }) => {
  const clickHandler = (opt) => () => {
    console.log(opt);
    setActiveGroup(opt);
  };

  const cn = (opt) =>
    classNames("duration-150 text-zinc-500", {
      "bg-white !text-black": opt.title === activeGroup.title,
    });

  return (
    <div className="flex items-center bg-zinc-100 font-YekanBakh-Medium rounded-md p-1 gap-1 child:h-10 child:flex-center child:rounded-md child:cursor-pointer child:min-w-[80px] child:px-4">
      {options.map((opt) => (
        <span className={cn(opt)} onClick={clickHandler(opt)} key={opt.id}>
          {opt.title}
        </span>
      ))}
    </div>
  );
};

export default GroupBy;
