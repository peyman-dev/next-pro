import React, { Suspense } from "react";
import SubmitAnswer from "./submit-answer";
import { createAnswer } from "@/app/actions";
import { ResponseCard } from "@/components/_ui/cards";

const ResponseSection = ({ questID, responses }) => {
  const VisibleCommentsLength = () => {
    let publicItems = Array.from(responses).filter(
      (response) => response.isPublished
    );
    console.log(publicItems);

    return <span className="text-base px-1">{`(${publicItems.length})`}</span>;
  };

  return (
    <>
      <section className="my-20 space-y-5">
        <p className="text-2xl text-zinc-700 font-YekanBakh-Heavy">
          ایجاد پاسخ
        </p>
        <SubmitAnswer questionID={questID} submit={createAnswer} />
      </section>
      <section className="!mt-20">
        <p className="text-2xl text-zinc-700 font-YekanBakh-Heavy">
          پاسخ ها
          <VisibleCommentsLength />
        </p>
        <section className="space-y-5 w-full">
          {responses.map(
            (comment) =>
              comment.isPublished && (
                <ResponseCard key={comment._id} {...comment} />
              )
          )}
        </section>
      </section>
    </>
  );
};

export default ResponseSection;
