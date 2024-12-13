import Link from "next/link";
import React from "react";

const AlternativeQuestions = ({ alternatives }) => {
  return (
    <div className="child:p-2 rounded border overflow-hidden">
      <div>
        <p className="text-lg font-YekanBakh-Bold">
          پرسش های
          <b className="text-blue-500 inline-block pr-0.5">مشابه</b>
        </p>
      </div>
      <div className="mt-3">
        {alternatives.map((item) => (
          <article
            key={item._id}
            className="hover:bg-zinc-50 p-2 h-[76px] min-w-full rounded-md"
          >
            <Link className="max-h-max" href={`/explore/question/${item._id}`}>
              <div>
                <p className="font-YekanBakh-Bold w-2/3 overflow-hidden line-clamp-1">
                  {item.title}
                </p>
              </div>

              <div className="flex items-center gap-1 child:px-2 child-hover:bg-zinc-200 child:cursor-pointer mt-1 text-zinc-600 child:py-1 child:rounded-sm child:bg-zinc-100 text-xs font-YekanBakh-Bold child:pt-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="inline-block">
                    {tag}#
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AlternativeQuestions;
