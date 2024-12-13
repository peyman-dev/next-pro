import { getAllAnswers } from "@/app/actions";
import CommentsTable from "@/components/layouts/pages/admin/comments/comments-table";
import GradientText from "@/components/ui/TextGradient";
import React from "react";

const page = async () => {
  const comments = await getAllAnswers();

  return (
    <>
      <div className="flex items-center container justify-between">
        <div>
          <h2 className="text-3xl font-YekanBakh-Heavy">
            <GradientText
              text="نظرات (پاسخ‌ها)"
              fromColor="from-white to-white/40"
            />
          </h2>
          <p className="font-YekanBakh-Medium text-zinc-500">
            از طریق این صفحه می‌توانید تمامی نظراتی که کاربران در سایت ثبت
            کرده‌اند را مدیریت کنید
          </p>
        </div>
      </div>
      <CommentsTable comments={comments} />
    </>
  );
};

export default page;
