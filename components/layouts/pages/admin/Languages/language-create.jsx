"use client";
import Switch from "@/components/ui/switch";
import { ChevronLeft, Edit } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Editor from "@/components/_ui/editor";

const LanguageCreateForm = ({ handler }) => {
  const router = useRouter();
  const [langInfo, setLangInfo] = useState({
    name: "",
    shortName: "",
    image: "",
    isVisible: true,
  });
  const [description, setDescription] = useState("");

  const submitAction = async () => {
    try {
      const { success, message } = await handler({ ...langInfo, description });

      if (success) {
        return toast.success(message, {
          onClose: () => {
            router.back();
          },
        });
      }
    } catch (error) {
      return toast.error(message, {
        onClose: () => {
          router.refresh();
        },
      });
    }
  };

  return (
    <>
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
      <div className="mt-4">
        <Editor
          cn={{
            header: "!bg-black !border-white/20",
            container: "!border-white/20",
            body:"!text-white child:!text-white"
          }}
          value={description}
          onChange={setDescription}
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
    </>
  );
};

export default LanguageCreateForm;
