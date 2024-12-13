import Link from "next/link";
import React from "react";
import { BsBell } from "react-icons/bs";

const Links = () => {
  return (
    <div className="text-white/70 child:duration-150 child-hover:text-white text-sm child:p-0 child:m-0 flex items-center gap-3">
      <Link href={"/"}>صفحه اصلی</Link>
      <Link href={"/"}>مدیران</Link>
      <Link href={"/"}>آنالیز</Link>
      <Link href={"/"}> تیکت ها </Link>
      <div>
        <button className="size-8 hover:bg-white/5 duration-150 flex-center rounded-full border border-white/10">
          <BsBell />
        </button>
      </div>
      <div className="size-8">
        <button className="size-8 rounded-full bg-gradient-to-tl from-pink-500 to-sky-500"></button>
      </div>
    </div>
  );
};

export default Links;
