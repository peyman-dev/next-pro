'use client'
import Logo from "@/components/ui/Logo";
import useUserStore from "@/utils/stores/user-store";
import React from "react";

const Hero = () => {
  const s = useUserStore()
  console.log(s)
  return (
    <section>
      <div className="w-full h-[500px] sm:rounded-lg overflow-hidden shadow-lg relative items-center flex-col gap-4 flex justify-center bg-black text-white">
        <div className="absolute h-full w-full bg-slate-950">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
        </div>

        <Logo />
        <div className="text-center w-[90%] sm:w-[70%] mx-auto text-lg relative z-10">
          <p>
            نکست پرو، جامعه‌ای است برای افرادی که به دنبال رشد، یادگیری و پیشرفت
            در دنیای تکنولوژی، برنامه‌نویسی و تولید محتوا هستند. این پلتفرم با
            هدف ایجاد یک محیط حرفه‌ای برای به اشتراک‌گذاری دانش، تجربه و
            ایده‌های نوآورانه طراحی شده است.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
