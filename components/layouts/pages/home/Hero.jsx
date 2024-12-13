"use client";
import { Button } from "@/components/_ui/button";
import useThemeStore from "@/utils/stores/theme-store";
import React from "react";

const RightSide = () => (
  <div>
    <h1 className="text-5xl font-YekanBakh-Fat leading-[62px]">
      نکست پرو: جایی برای یادگیری، اشتراک‌گذاری و رشد توسعه‌دهندگان
    </h1>
    <p className="text-xl mt-4 text-zinc-500 font-YekanBakh-Medium">
      در نکست پرو، کنار یکدیگر یاد می‌گیریم، تجربیات خود را به اشتراک می‌گذاریم
      و مهارت‌های برنامه‌نویسی‌مان را تقویت می‌کنیم. به جامعه‌ای بپیوندید که از
      شما و پیشرفتتان حمایت می‌کند.
    </p>

    <div className="flex justify-center lg:justify-start font-YekanBakh-Medium tracking-normal items-center gap-3 child:px-4 child:py-2 child:rounded-md text-base child-hover:bg-opacity-90 mt-4">
      <Button>همین حالا بپیوندید</Button>
      <button className="hover:bg-indigo-600 hover:text-white duration-100 focus-within:ring-4 bg-indigo-600/10 text-indigo-600">
        سوال خود را بپرسید
      </button>
    </div>
  </div>
);
const LefttSide = () => {
  const theme = useThemeStore(state => state.isDark);
  return (
    <div>
      <img src={theme ? "/images/hero-dark.svg" : '/images/hero-light.svg'} alt="" />
    </div>
  );
};

const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse mt-24 lg:mt-0 text-center lg:text-start gap-20 lg:gap-0 tracking-tight child:w-full lg:child:w-1/2 h-[85vh] lg:mr-32 items-center justify-between">
      <RightSide />
      <LefttSide />
    </section>
  );
};

export default Hero;
