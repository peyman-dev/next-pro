import { getMe } from "@/app/actions";
import AskPage from "@/components/layouts/pages/explore/language/ask/ask-page";
import React from "react";

const page = async () => {
  const user = await getMe();

  return <AskPage user={user} />;
};

export default page;
