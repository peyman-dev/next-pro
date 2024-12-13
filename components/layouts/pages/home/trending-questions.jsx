import { getAllQuestions } from "@/app/actions";
import GradientText from "@/components/ui/TextGradient";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import React, { memo } from "react";

const Question = memo((data) => {
  return (
    <article className="p-5 w-full border rounded-2xl">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from(data.tags)
            .slice(0, 3)
            .map((tag) => (
              <span className="text-xs px-2 rounded-md bg-zinc-900 pt-1 text-white border cursor-pointer duration-150 hover:bg-opacity-90 select-none font-YekanBakh-Bold pb-0.5">
                {tag}
              </span>
            ))}
        </div>
        <p className="font-YekanBakh-Bold flex items-center gap-0.5 text-sm text-zinc-500">
          <span className="text-sm px-1">
            <MessageSquare className="size-4 mb-1" />
          </span>
          {Array.from(data.responses).length}
          پاسخ
        </p>
      </header>
      <main className="mt-6 mb-2">
        <Link href={`/explore/question/${data._id}`}>
          <h3 className="font-YekanBakh-Bold line-clamp-2 h-12">
            {data.title}
          </h3>
        </Link>
      </main>
    </article>
  );
});

const TrendingQuestions = async () => {
  const questions = await getAllQuestions();

  return (
    <section className="container">
      <div className="w-full mt-20 container flex items-center justify-center flex-col gap-3">
        <GradientText
          text="پرسش های پرطرفدار"
          fromColor="from-zinc-950 dark:from-zinc-100"
          viaColor="via-zinc-800 dark:via-zinc-200"
          toColor="to-zinc-500 dark:to-zinc-500"
          className="text-5xl font-YekanBakh-Fat"
        />
        <p className="text-lg text-zinc-500 tracking-tight">
          پرسش هایی که در روز های گذشته بیشترین بازدید و جستجو را داشته اند.
        </p>
      </div>
      <section className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-2">
        {Array.from(questions).map((quest) => (
          <Question {...quest} />
        ))}
      </section>
    </section>
  );
};

export default TrendingQuestions;
