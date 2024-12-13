import { langCreate } from "@/app/actions";
import LanguageCreateForm from "@/components/layouts/pages/admin/Languages/language-create";
// import LanguageCreateForm from "@/components/layouts/pages/admin/languages/create/LanguageCreateForm";
import RedirectButton from "@/components/ui/buttons/RedirectButton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-YekanBakh-Heavy">ایجاد زبان</h2>
          <p className="font-YekanBakh-Medium text-zinc-500">
            یک زبان و دسته بندی جدید ایجاد کنید !
          </p>
        </div>
        <RedirectButton to={"/admin/languages"} />
      </div>
      <LanguageCreateForm handler={langCreate} />
    </>
  );
};

export default page;
