"use client";
import InputField from "@/components/ui/InputField";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = ({ register }) => {
  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitted = async () => {
    const request = await register({
      fullname: fullName,
      username,
      email,
      password,
    });

    if (request.success) {
      toast.success(request.message, {
        onClose: () => redirect('/')
      })
    } else {
      toast.error(request.message)
    }
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-xl font-YekanBakh-Heavy"> خوش آمدید 🤞</h2>
        <div className="flex-center gap-1 text-sm !mt-1 text-zinc-500 ">
          <p>حساب کاربری دارید؟</p>
          <Link className="text-blue-500" href={"/auth/login"}>
            وارد شوید.
          </Link>
        </div>
      </div>
      <div className="w-full">
        <InputField
          valueSave={setFullname}
          placeholder={"نام و نام خانوادگی"}
        />
        <InputField valueSave={setUsername} placeholder={"نام کاربری"} />
        <InputField valueSave={setEmail} placeholder={"آدرس ایمیل"} />
        <InputField
          type={"password"}
          valueSave={setPassword}
          placeholder={"گذرواژه"}
        />
      </div>
      <div className="w-full">
        <button onClick={submitted} className="w-full h-10 rounded-md bg-indigo-600 text-center text-white font-YekanBakh-Bold shadow-inner shadow-indigo-500 hover:bg-opacity-90 duration-150 focus-within:ring-4">
          ثبت نام
        </button>
      </div>
    </>
  );
};

export default RegisterForm;
