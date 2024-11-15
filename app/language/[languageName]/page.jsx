import Header from "@/components/ui/pages/language/Header";
import React from "react";

const Page = ({ params }) => {
  const { languageName } = params;

  return (
    <div>
      <Header language={languageName} />
    </div>
  );
};

export default Page;
