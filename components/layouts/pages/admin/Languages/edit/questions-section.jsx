import { removeQuestion } from "@/app/actions";
import QuestCard from "@/components/ui/pages/Admin/question-card";
import QuestionsRow from "@/components/ui/pages/Admin/questions-table";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const EmptyTable = ({ query }) => {
  "use client";
  const [show, setShow] = useState(true);

  const closeAlert = () => setShow(!show);

  if (query == 0 && show)
    return (
      <div className="max-w-max mx-auto mt-10 px-20 hover:bg-red-600/15 relative h-12 rounded-md bg-red-600/10 text-red-600 flex items-center justify-center">
        <p>هیچ پرسشی تابحال ثبت نشده است</p>
        <button
          onClick={closeAlert}
          className="absolute left-4 bg-red-600/10  size-7 focus-within:ring-4 ring-red-600/20 text-sm hover:bg-red-600/30 rounded-full flex-center"
        >
          <GrClose />
        </button>
      </div>
    );
};
const QuestionsSection = ({ questions }) => {
  return (
    <>
      <section className="flex mt-10 items-center justify-between">
        <div>
          <h1 className="font-YekanBakh-Heavy text-2xl">مدیریت پرسش‌ها</h1>
          <p className="text-zinc-500 font-YekanBakh-Regular text-sm mt-1">
            پرسش های این زبان را در این بخش مدیریت کنید
          </p>
        </div>
        <p className="text-xl font-YekanBakh-Heavy">{questions.length} پرسش</p>
      </section>
      <QuestionsRow removeAction={removeQuestion} questions={questions} />
      <EmptyTable query={questions.length} />
    </>
  );
};

export default QuestionsSection;
