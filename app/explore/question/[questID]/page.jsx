import {
  getAlternativeQuestions,
  getAnswers,
  getLanguageQuestions,
} from "@/app/actions";
import QuestionPage from "@/components/layouts/pages/explore/question/question-page";
import FollowCard from "@/components/ui/Cards/follow-card";
import AlternativeQuestions from "@/components/ui/pages/question-page/alternative-questions";
import ResponseSection from "@/components/ui/response-section/response-section";
import React, { Suspense } from "react";

const page = async ({ params }) => {
  const { questID } = await params;
  const { question, error } = await getLanguageQuestions(questID);
  const {
    ok,
    message,
    data: alternatives,
  } = await getAlternativeQuestions(question.tags);

  const parsedUser = JSON.parse(JSON.stringify(question.author));

  const responses = await getAnswers(question._id);

  return (
    <Suspense fallback={<div className="w-full">
      loading :)
    </div>}>
      <main className="container flex gap-10">
        <section className="mb-20 mx-auto prose prose-sm prose-pre:![direction:_ltr] child:text-wrap w-full text-wrap prose-code:[direction:_ltr] sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert ">
          <QuestionPage question={question} />
          <ResponseSection questID={question._id} responses={responses} />
        </section>
        <aside className="mt-12  sticky top-4 space-y-4 max-h-max min-w-[300px] max-w-[300px]">
          <FollowCard user={parsedUser} />
          {ok && <AlternativeQuestions alternatives={alternatives} />}
          <p className="text-xs font-YekanBakh-Medium text-zinc-500">
            &copy; توسعه داده شده توسط پیمان احمدی
          </p>
        </aside>
      </main>
    </Suspense>
  );
};

export default page;
