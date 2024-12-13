import React from "react";

const TableHeader = ({ children }) => {
  return (
    <div className="flex p-3 px-6 select-none items-center child:w-full text-zinc-600 font-YekanBakh-Medium">
      {children}
    </div>
  );
};

export default TableHeader;
