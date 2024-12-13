import React from "react";

const TableTop = ({ children }) => {
  return (
    <div className="w-full p-3 px-6 flex items-center justify-between">
      {children}
    </div>
  );
};

export default TableTop;
