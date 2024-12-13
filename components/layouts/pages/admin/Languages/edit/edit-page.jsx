"use client";
import Switch from "@/components/ui/switch";
import useFont from "@/utils/hooks/useFont";
import { ChevronLeft, Edit } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import QuestionsSection from "./questions-section";
import { editLang } from "@/app/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/_ui/ckeditor"), {
  ssr: false,
});

const LanguageEditPage = ({ data }) => {
  const font = useFont();
  const { language } = data;
  const router = useRouter();
  const [langInfo, setLangInfo] = useState({
    name: language.name,
    shortName: language.shortName,
    image: language.image,
    isVisible: language.isVisible,
    id: language._id,
  });
  const [description, setDescription] = useState(language.description || "");

  const submitAction = async () => {
    try {
      const { message, success } = await editLang({
        ...langInfo,
        id: language._id,
        description,
      });

      if (!success) return toast.error(message);

      toast.success(message, {
        onClose: () => {
          router.push("/admin/languages");
        },
      });
    } catch (error) {
      toast.error("عملیات با خطا مواجه شد", {
        onClose: () => {
          router.refresh();
        },
      });
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-YekanBakh-Heavy text-2xl">
            ویرایش زبان {language.name}
          </h1>
          <p className="text-zinc-500 font-YekanBakh-Regular text-sm mt-1">
            از طریق صفحه می‌توانید زبان مورد نظر را ویرایش کنید
          </p>
        </div>
        <div>
          <Link href={"/admin/languages"} className="flex items-center text-sm">
            <span>بازگشت</span>
            <ChevronLeft />
          </Link>
        </div>
      </div>
      <section className="mt-10 grid grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="select-none font-YekanBakh-Medium text-zinc-300 text-sm"
          >
            عنوان:
          </label>
          <input
            type="text"
            value={langInfo.name}
            id="name"
            onChange={({ target }) => {
              const { value } = target;

              setLangInfo((prev) => ({ ...prev, name: value }));
            }}
            placeholder="عنوان زبان را ویرایش نمائید ..."
            className="block w-full h-10 bg-white/5 focus-within:bg-white/10 placeholder:!text-zinc-500 placeholder:text-sm outline-none px-4 mt-2 rounded-md border border-white/10"
          />
        </div>
        <div>
          <label
            htmlFor="shortName"
            className="select-none font-YekanBakh-Medium text-zinc-300 text-sm"
          >
            عنوان URL:
          </label>
          <input
            type="text"
            value={langInfo.shortName}
            id="shortName"
            onChange={({ target }) => {
              const { value } = target;

              setLangInfo((prev) => ({ ...prev, shortName: value }));
            }}
            placeholder="عنوان URL زبان را ویرایش نمائید ..."
            className="block w-full h-10 bg-white/5 focus-within:bg-white/10 placeholder:!text-zinc-500 placeholder:text-sm outline-none px-4 mt-2 rounded-md border border-white/10"
          />
        </div>
        <div>
          <label
            htmlFor="image"
            className="select-none font-YekanBakh-Medium text-zinc-300 text-sm"
          >
            عنوان URL:
          </label>
          <input
            type="text"
            value={langInfo.image}
            id="image"
            onChange={({ target }) => {
              const { value } = target;

              setLangInfo((prev) => ({ ...prev, image: value }));
            }}
            placeholder="تصویر زبان را تغییر دهید"
            className="block w-full h-10 bg-white/5 focus-within:bg-white/10 placeholder:!text-zinc-500 placeholder:text-sm outline-none px-4 mt-2 rounded-md border border-white/10"
          />
        </div>

        <div>
          <p className="select-none font-YekanBakh-Medium w-f text-zinc-300 text-sm">
            وضعیت انتشار:
          </p>
          <div
            onClick={() => {
              setLangInfo((prev) => ({ ...prev, isVisible: !prev.isVisible }));
            }}
            tabIndex={"1"}
            className="p-4 duration-150 ring-white/40 select-none cursor-pointer hover:bg-opacity-90 focus-within:ring-4 text-black font-YekanBakh-Medium rounded-md h-10 bg-white border mt-3 border-white/10 flex items-center justify-between w-1/2 shadow-inner shadow-black/10"
          >
            <p className="text-sm">آیا دوره عمومی می‌باشد</p>
            <Switch
              id="isVisible"
              toggle={langInfo.isVisible}
              fn={() => {
                setLangInfo((prev) => ({
                  ...prev,
                  isVisible: prev.isVisible,
                }));
              }}
            />
          </div>
        </div>
      </section>
      <div className="w-full child:!text-black mt-10">
        <Editor
          value={description}
          setValue={setDescription}
    
        />
      </div>

      <div className="w-full gap-2 mt-10 flex items-center justify-end">
        <button
          onClick={router.back}
          className="px-3 flex items-center gap-2 text-sm py-1 rounded-md bg-red-600/10  h-8 duration-100 focus-within:ring-4 hover:bg-red-600/20 text-red-500 ring-red-400/30  font-YekanBakh-Medium"
        >
          انصراف
        </button>
        <button
          onClick={submitAction}
          className="px-3 flex items-center gap-2 text-sm py-1 rounded-md bg-indigo-700 text-white h-8 duration-100 focus-within:ring-4 hover:bg-opacity-90 ring-indigo-400/30  font-YekanBakh-Medium"
        >
          ویرایش
          <Edit className="size-4" />
        </button>
      </div>
      <QuestionsSection questions={language.questions} />
    </>
  );
};

export default LanguageEditPage;
