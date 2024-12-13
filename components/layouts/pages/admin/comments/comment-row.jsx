"use client";
import { TableCell, TableRow } from "@/components/_ui/table";
import classNames from "classnames";
import { Edit, Info, Trash2 } from "lucide-react";
import React, { useEffect } from "react";

const CommentRow = ({ data, fn }) => {
  const html = {
    dangerouslySetInnerHTML: {
      __html: data.content,
    },
    className: "line-clamp-1 ",
  };

  const cn = classNames(
    "text-xs font-YekanBakh-Bold  px-3 py-1 rounded-2xl max-w-max",
    {
      "bg-emerald-600/10 text-emerald-500": data.isPublished,
      "bg-red-600/10 text-red-500": !data.isPublished,
    }
  );

  return (
    <TableRow className="h-10" key={data._id}>
      <TableCell className="max-w-[250px]">
        <div {...html}></div>
      </TableCell>
      <TableCell>
        {data.isPublished ? (
          <span className={cn}>منتشر شده</span>
        ) : (
          <span className={cn}>خصوصی</span>
        )}
      </TableCell>
      <TableCell>
        <span dir="ltr" className="text-zinc-300 cursor-pointer">
          @{data.user.username}
        </span>
      </TableCell>
      <TableCell>
        <div className="flex items-center child:bg-opacity-15 child-hover:bg-opacity-20 text-zinc-500 gap-2 child:duration-150 child:px-3 child:py-2 child:rounded-md justify-center">
          <button
            onClick={() => fn.info(data)}
            className="bg-blue-500 text-blue-500"
          >
            <Info className="size-5" />
          </button>
          <button
            onClick={() => fn.edit(data)}
            className="bg-green-500 text-green-500"
          >
            <Edit className="size-5" />
          </button>
          <button
            onClick={() => fn.remove(data)}
            className="bg-red-500 text-red-500"
          >
            <Trash2 className="size-5" />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default CommentRow;
