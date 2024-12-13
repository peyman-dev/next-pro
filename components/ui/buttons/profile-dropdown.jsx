"use client";
import useOutsideClickDetect from "@/utils/hooks/useOutsideClickDetect";
import useUserStore from "@/utils/stores/user-store";
import { CreditCard, KeyRound, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsQuestion } from "react-icons/bs";
import { GrSupport } from "react-icons/gr";

export const AdminLink = ({ role }) => {
  const roles = ["ADMIN", "USER", "SUPPORT", "AUTHOR", "FOUNDER", "MANAGER"];

  const isAdmin = roles.some((_role) => _role === role);

  if (isAdmin) {
    return (
      <Link
        href={"/admin"}
        className="h-10 rounded-md duration-150 flex items-center gap-1"
      >
        <KeyRound className="size-4" />
        <span className="text-sm font-YekanBakh-Medium">پنل مدیریت</span>
      </Link>
    );
  }
};

const ProfileDropdown = () => {
  const [show, setShow] = useState(false);
  const user = useUserStore((state) => state.user);
  const dropdownRef = useRef();

  const outsideclickHandler = () => {
    if (show) {
      setShow(false);
    }
  };

  useOutsideClickDetect(dropdownRef, outsideclickHandler);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="size-10 bg-gradient-to-tl from-pink-400 to-sky-300 rounded-full flex-center"
      ></button>

      <div
        className={`absolute z-10 ${
          !show && "opacity-0 invisible"
        } w-[224px] child:p-1 bg-white dark:bg-black rounded-md border top-[110%] left-0 duration-300`}
        ref={dropdownRef}
      >
        <header className="text-sm border-b !px-4 !py-2 font-YekanBakh-Medium">
          <p className="font-YekanBakh-Bold">{user?.fullname}</p>
          <p className="text-zinc-500 text-xs">{user?.email}</p>
        </header>
        <section
          onClick={() => {
            setShow(false);
          }}
          className="child-hover:bg-zinc-100 border-b child:w-full child:px-3"
        >
          <Link
            href={`/dashboard/`}
            className="h-10 rounded-md duration-150 flex items-center gap-1"
          >
            <User className="size-4" />
            <span className="text-sm font-YekanBakh-Medium">حساب کاربری</span>
          </Link>
          <AdminLink role={user?.role} />

          <Link
            href={"settings"}
            className="h-10 rounded-md duration-150 flex items-center gap-1"
          >
            <Settings className="size-4" />
            <span className="text-sm font-YekanBakh-Medium">تنظیمات</span>
          </Link>
        </section>
        <section className="child-hover:bg-zinc-100 border-b child:w-full child:px-3">
          <Link
            href={"/explore/pricing"}
            className="h-10 rounded-md duration-150 flex items-center gap-1"
          >
            <CreditCard className="size-4" />
            <span className="text-sm font-YekanBakh-Medium">اشتراک</span>
          </Link>
          <Link
            href={"/explore/my-questions"}
            className="h-10 rounded-md duration-150 flex items-center gap-1"
          >
            <BsQuestion />
            <span className="text-sm font-YekanBakh-Medium">پرسش های من</span>
          </Link>

          <Link
            href={"/explore/chat"}
            className="h-10 rounded-md duration-150 flex items-center gap-1"
          >
            <GrSupport className="size-4" />
            <span className="text-sm font-YekanBakh-Medium">پشتیبانی</span>
          </Link>
        </section>
        <section className="child-hover:bg-red-600/10 text-red-600 child:w-full child:px-3">
          <Link
            href={"logout"}
            className="h-10 rounded-md duration-150 flex items-center gap-1"
          >
            <LogOut className="size-4" />
            <span className="text-sm font-YekanBakh-Medium">خروج از حساب</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default ProfileDropdown;
