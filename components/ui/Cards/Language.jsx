"use client";
import { Users } from "lucide-react";
import { redirect } from "next/navigation";
import React, { memo } from "react";

const Language = memo((lang) => {
  return (
    <article
      onClick={() => {
        redirect(`/explore/languages/${lang.shortName}`);
      }}
      className="overflow-hidden rounded-md hover:scale-[0.95] duration-150 border cursor-pointer"
    >
      <header className={`h-[180px] relative overflow-hidden`}>
        <img
          src={lang.image}
          className="w-full h-full object-cover"
          alt={lang.name}
        />
        <div className="w-full p-4 flex-col h-full absolute top-0 right-0 bg-gradient-to-t from-black/80 text-white flex items-end justify-end">
          <p className="text-2xl font-YekanBakh-Heavy">{lang.name}</p>
          <div>
            <div className="flex items-center gap-1">
              <span>{lang.questions.length}</span>
              <span className="pb-1">پرسش</span>
            </div>
          </div>
        </div>
      </header>
      <main className="p-4">
        <div
          dangerouslySetInnerHTML={{ __html: lang.description }}
          style={{ direction: "rtl" }}
          className="!line-clamp-2"
        ></div>
      </main>
      <footer className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center text-zinc-500 text-sm font-YekanBakh-Medium gap-2">
          <span>
            <Users className="size-4 mb-1" />
          </span>
          <span>{lang.followers.length} دنبال کننده</span>
        </div>
      </footer>
    </article>
  );
});

export default Language;
