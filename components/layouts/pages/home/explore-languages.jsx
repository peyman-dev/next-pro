import Language from "@/components/ui/Cards/Language";
import GradientText from "@/components/ui/TextGradient";
import React from "react";

const ExploreLanguages = ({ langs }) => {
  return (
    <section className="container">
      <div className="w-full mt-20 container flex items-center justify-center flex-col gap-3">
        <GradientText
          text="جواب سوالتان را اینجا پیدا کنید !"
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
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {langs?.map((language) => (
          <Language key={language._id} {...language} />
        ))}
      </section>
    </section>
  );
};

export default ExploreLanguages;
