import { UserAskedCard } from "@/components/_ui/cards";
import React from "react";

const QuestionContent = ({ quest }) => {
  return (
    <>
      <section className="mb-5 w-full">
        <h2 className="text-xl font-YekanBakh-Heavy mb-2">{quest.title}</h2>
        <UserAskedCard
          date={String(quest.createdAt).slice(0, 10)}
          info={quest.author}
        />
      </section>
      <section>
        <div
          className="space-y-2 "
          dangerouslySetInnerHTML={{ __html: quest.description }}
        ></div>
      </section>
    </>
  );
};

export default QuestionContent;
