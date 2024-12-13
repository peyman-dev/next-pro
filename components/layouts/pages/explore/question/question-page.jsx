import React from "react";
import QuestionContent from "./question-content";

const QuestionPage = async ({ question }) => {
  return (
    <section className="mt-10 w-full">
      <QuestionContent quest={question} />
    </section>
  );
};

export default QuestionPage;
