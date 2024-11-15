"use client";
import useFont from "@/utils/hooks/useFont";
import { useRouter } from "next/navigation";
import React from "react";

const Language = ({ name, followers, image, questions, shortName }) => {
  const Font = useFont();
  const router = useRouter();

  const redirector = (path) => () => router.push("/language/" + path);

  return (
    <article
      onClick={redirector(shortName)}
      dir="ltr"
      className="w-full p-2 cursor-pointer duration-150 hover:scale-105 rounded-3xl"
    >
      <div className="bg-blue-600 rounded-2xl max-h-[184px] h-[184px] p-4">
        <img src={image} className="w-full rounded-full " alt={name} />
      </div>
      <div className="mt-2">
        <p className={Font.className}>#{name}</p>
        <div dir="rtl" className="w-full text-zinc-500 dark:text-zinc-600">
          <p className="text-sm font-YekanBakh-Medium">
            +{followers} دنبال کننده
          </p>
          <p className="text-sm font-YekanBakh-Medium">
            +{questions} پرسش مطرح شده
          </p>
        </div>
      </div>
    </article>
  );
};

export default Language;
