import * as Lucide from "lucide-react";
import React from "react";

const Filter = () => {
  return (
    <div>
      <button className="flex items-center gap-3 px-4 font-YekanBakh-Medium py-1 rounded-sm border">
        <Lucide.Filter className="size-4"/>
        <span>
            فیلتر
        </span>
      </button>
    </div>
  );
};

export default Filter;
