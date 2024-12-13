"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = ({ login }) => {
  const [userInfos, setUserInfos] = useState({
    identifier: "",
    password: "",
    rememberMe: false,
  });

  const getLogin = async () => {
    const result = await login(userInfos);

    if (result.success) {
      return toast.success("ورود با موفقیت انجام شد", {
        onClose: () => {
          redirect("/");
        },
      });
    } else {
      return toast.error(result.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-1 flex-col">
        <h2 className="text-2xl font-YekanBakh-Heavy">خوش آمدید 🤞</h2>
        <p className="text-sm text-zinc-500">
          حساب کاربری ندارید؟
          <Link
            href={"/auth/register"}
            className="font-YekanBakh-Regular px-1 text-indigo-500"
          >
            ثبت نام کنید
          </Link>
        </p>
      </div>

      <div className="w-full space-y-2 child:bg-zinc-50/50 child:dark:bg-zinc-900/20 child:shadow-inner child:shadow-zinc-500/10">
        <input
          type="text"
          className="w-full bg-transparent duration-150 focus-within:ring-2 placeholder:text-zinc-500 font-YekanBakh-Medium outline-none px-4 text-sm h-10 rounded-md border"
          placeholder="نام کاربری یا آدرس ایمیل را وارد نمائید"
          onChange={({ target }) => {
            const { value } = target;
            setUserInfos((prev) => ({
              ...prev,
              identifier: value,
            }));
          }}
          autoComplete="billing bday-month webauthn"
        />
        <input
          type="password"
          className="w-full bg-transparent duration-150 focus-within:ring-2 placeholder:text-zinc-500 font-YekanBakh-Medium outline-none px-4 text-sm h-10 rounded-md border"
          placeholder="گذرواژه خود را وارد نمائید"
          onChange={({ target }) => {
            const { value } = target;
            setUserInfos((prev) => ({
              ...prev,
              password: value,
            }));
          }}
          autoComplete="billing bday-month webauthn"
        />
      </div>
      <div className="flex items-center w-full select-none text-sm gap-1">
        <input
          type="checkbox"
          onChange={(event) => {
            setUserInfos((prev) => ({
              ...prev,
              rememberMe: event.target.checked,
            }));
          }}
          id="remember-me"
          className="checked:accent-indigo-500"
        />
        <label htmlFor="remember-me">مرا به خاطر بسپار</label>
      </div>
      <button
        onClick={getLogin}
        className="h-10 bg-indigo-600 shadow-inner shadow-indigo-400 hover:bg-opacity-90 duration-150 focus-within:ring-4 w-full text-white rounded-lg"
      >
        ورود
      </button>
    </>
  );
};

export default LoginForm;
