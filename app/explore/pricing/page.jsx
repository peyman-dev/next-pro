"use client";
import { Pricing } from "@/components/_ui/cards";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Editor = dynamic(() => import("@/components/_ui/ckeditor"), {
  ssr: false,
});

const page = () => {
  const [editorContent, setEditorContent] = useState("");

  return (
    <main className="flex w-full items-center min-h-[80vh] justify-center gap-4">
      {/* <Pricing.Card> */}
      {/* <Pricing.Header  */}
      {/* plan={"رایگان"} */}
      {/* planCaption={"ایده آل برای پروژه های جانبی و یادگیری."} */}
      {/* /> */}
      {/* </Pricing.Card> */}

      <Editor value={editorContent} setValue={setEditorContent} />
    </main>
  );
};

export default page;
