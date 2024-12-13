"use client";
import React, { useState } from "react";
import "./styles.css";
import UserProfileCard from "@/components/ui/Cards/UserProfileCard";
import TagsInput from "@/components/ui/Inputs/TagsInput";
import useStyles from "@/utils/hooks/useStyles";
import { DollarSign, Hash, Pen } from "lucide-react";
import { Button } from "@/components/_ui/button";
import { usePathname, useRouter } from "next/navigation";
import { createQuestion } from "@/app/actions";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/_ui/ckeditor"), {
  ssr: false,
});

const AskPage = ({ user }) => {
  const path = usePathname();
  const router = useRouter();
  const _path = String(path).split("/")[3];
  const [state, setState] = useState({
    title: "",
    bounty: 0,
    author: user.id,
    language: _path,
  });
  // title
  // bounty
  // description
  // tags
  // language
  // author
  const [desc, setDesc] = useState("");

  const [tags, setTags] = useState([]);
  const { labelStyles } = useStyles();

  const submitted = async () => {
    const questionData = {
      ...state,
      description: desc,
      tags,
    };

    const req = await createQuestion(questionData);

    if (req.success) {
      return toast.success(req.message, {
        autoClose: 1500,
        onClose: () => {
          router.push(`/explore/languages/${_path}/`);
        },
      });
    } else {
      console.log(req);
    }
  };

  return (
    <>
      <main className="question-main mt-10 mb-32">
        <div>
          <div className="flex justify-between">
            <div className="mb-10">
              <h2 className="text-3xl font-YekanBakh-Heavy">ایجاد پرسش</h2>
              <p className="text-zinc-500 mt-1">
                لطفا در وارد کردن مشخصات پرسش دقت کنید
              </p>
            </div>
            <button
              onClick={() => {
                router.back();
              }}
              className="font-YekanBakh-Medium focus-within:ring-4 ring-zinc-700/40 max-h-max px-3 py-1.5 rounded-sm bg-zinc-950 text-white"
            >
              بازگشت
            </button>
          </div>
          <div className="space-y-5">
            <div>
              <p className={labelStyles}>عنوان:</p>
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setState((prev) => ({
                    ...prev,
                    title: value,
                  }));
                }}
                type="text"
                placeholder="مثال: استفاده از متغیرهای React در نام کلاس‌های Tailwind "
              />
            </div>
            <div>
              <p className={labelStyles}>
                <DollarSign className="size-4 mb-0.5" />
                انعام:
              </p>
              <input
                onChange={(event) => {
                  const value = event.target.value;
                  setState((prev) => ({
                    ...prev,
                    bounty: value,
                  }));
                }}
                type="text"
                placeholder="50,000T"
              />
            </div>
            <div>
              <p className={labelStyles}>توضیحات:</p>
              <Editor value={desc} setValue={setDesc} />
            </div>
            <div>
              <p className={labelStyles}>
                <Hash className="size-4 mb-0.5" />
                تگ‌ها:
              </p>
              <TagsInput length={3} setTags={setTags} tags={tags} />
            </div>
            <div className="flex items-center justify-between">
              <UserProfileCard user={user} />
              <Button onClick={submitted}>
                ایجاد پرسش
                <span>
                  <Pen />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AskPage;
