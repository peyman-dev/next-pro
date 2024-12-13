import { getLanguages, getQuestions } from "@/app/actions";
import LanguagesTable from "@/components/layouts/pages/admin/Languages/LanguagesTable";
import Link from "@/components/ui/link";
import GradientText from "@/components/ui/TextGradient";
import React from "react";
import { MdCreate } from "react-icons/md";

export const metadata = {
  title: "داشبورد ادمین - مدیریت زبان ها",
  description: "مدیریت زبان های وبسایت - پنل پیشرفته ادمین"
}

const page = async () => {
  const { success, languages: langs } = await getLanguages();
  const { data } = await getQuestions();

  return (
    <>
      <div className="flex items-center container justify-between">
        <div>
          <h2 className="text-3xl font-YekanBakh-Heavy">
            <GradientText text="زبان ها" fromColor="from-white to-white/40" />
          </h2>
          <p className="font-YekanBakh-Medium text-zinc-500">
            در این صفحه زبان ها (دسته بندی) های وبسایت را مدیریت کنید
          </p>
        </div>
        <Link href={"languages/create"}>
        ایجاد 
        <MdCreate />
        </Link>
      </div>
      <LanguagesTable langs={langs} />
    </>
  );
};

export default page;
