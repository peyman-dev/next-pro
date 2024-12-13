import { getLanguage } from "@/app/actions";
// import LanguageEditForm from "@/components/layouts/pages/admin/languages/LanguageEditForm";
import React from "react";
import LanguageEditPage from "@/components/layouts/pages/admin/Languages/edit/edit-page";

const page = async ({ params }) => {
  const { languageID } = await params;
  const res = await getLanguage(languageID);

  return (
    <>
      <LanguageEditPage data={res} />
    </>
  );
};

export default page;
