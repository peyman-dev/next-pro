import GradientText from "@/components/ui/TextGradient";
import React from "react";

const page = () => {
  return (
    <main className="flex gap-5 mt-10 container">
      <div className="w-full flex  flex-col gap-3">
        <GradientText
          text="محبوب ترین زبان ها "
          fromColor="from-zinc-950 dark:from-zinc-100"
          viaColor="via-zinc-800 dark:via-zinc-200"
          toColor="to-zinc-500 dark:to-zinc-500"
          className="text-5xl font-YekanBakh-Fat"
        />
        <p className="text-lg text-zinc-500 tracking-tight">
          به جامعه توسعه دهندگان ما بپیوندید تا به یکدیگر در حل چالش های برنامه
          نویسی کمک کنید
        </p>
      </div>
      <aside className="min-w-[300px] p-2">
        <p className="font-YekanBakh-Medium">داغ‌ترین ها:</p>
      </aside>
    </main>
  );
};

export default page;
