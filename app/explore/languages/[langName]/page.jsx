import { followLanguage, getLanguage } from "@/app/actions";
import QuestionsPage from "@/components/layouts/pages/explore/language/questions-page";
import React from "react";

const page = async ({ params }) => {
  const { langName } = await params;
  const data = await getLanguage(langName);

  return (
    <QuestionsPage
      lang={data.language}
      followedByUser={data.isFollowedByUser}
    />
  );
};

export default page;
