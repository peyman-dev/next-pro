"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const SubmitAnswer = ({ submit, questionID }) => {
  const [body, setBody] = React.useState("");
  const [isLoading, setIsLoading] = useState(true);

  const Editor = useMemo(
    () =>
      dynamic(() => import("@/components/_ui/ckeditor"), {
        ssr: false,
      }),
    []
  );

  const submitHandler = async () => {
    console.log(questionID);
    const data = {
      questionID,
      content: body,
    };

    const res = await submit(data);

    if (!res.ok) return toast.error(res.error || res.message);

    return Swal.fire({
      icon: "info",
      text: "پاسخ شما باموفقیت ثبت گردید و پس از تایید کارشناسان در سایت قرار میگیرد",
      confirmButtonText: "Ok",
    }).then(() => {
      window.location.reload();
      window.scrollBy({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  useEffect(() => {
    if (Editor) return setIsLoading(false);

    return () => {};
  }, [Editor]);

  return (
    <div className="text-base">
      {isLoading ? (
        <div className="w-full flex-center">
          <p className="text-2xl font-YekanBakh-Heavy">درحال بارگذاری...</p>
        </div>
      ) : (
        <Editor setValue={setBody} value={body} />
      )}

      <button
        onClick={submitHandler}
        className="float-end mt-4 h-10 text-white bg-zinc-950 font-YekanBakh-Medium rounded-md px-6 hover:bg-opacity-90 focus-within:ring-4 ring-zinc-700/50 duration-150"
      >
        ثبت پاسخ
      </button>
    </div>
  );
};

export default SubmitAnswer;
