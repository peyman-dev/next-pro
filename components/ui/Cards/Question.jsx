import React from "react";

const Question = () => {
  return (
    <article className="p-5 rounded-xl bg-white  dark:bg-zinc-950">
      <div className="flex items-center gap-3">
        <div>
          <img
            src="/images/profile.png"
            className="size-8 rounded-full object-cover"
            alt=""
          />
        </div>
        <div>
          <div className="flex items-center text-zinc-500 gap-1 font-YekanBakh-Medium">
            <p className="font-YekanBakh-Bold text-black dark:text-white">
              پیمان احمدی
            </p>
            <span>در</span>
            <p className="font-YekanBakh-Bold text-black dark:text-white">
              فرانت اند
            </p>
          </div>
          <p
            dir="ltr"
            className="font-YekanBakh-Medium text-sm text-zinc-500 max-w-max"
          >
            1403/08/23 - 17:12:48
          </p>
        </div>
      </div>
      <div className="mr-10">
        <h4 className="font-YekanBakh-Bold mt-1 text-xl text-zinc-800 dark:text-zinc-100">
          چطور مسیر فعلی رو در دایرکتوری app در Next.js بدست بیاریم؟
        </h4>

        <div className="mt-3 child:rounded-md child:dark:bg-zinc-800/50 child:pt-2 child:px-3 text-zinc-700 select-none child-hover:bg-zinc-300 dark:text-zinc-100 child-hover:dark:bg-zinc-700/80 child:py-1 flex items-center child:cursor-pointer child:duration-150 child:bg-zinc-200 gap-1 text-sm ">
          <p>Frontend</p>
          <p>React.js</p>
          <p>Next.js</p>
        </div>
      </div>
    </article>
  );
};

export default Question;
