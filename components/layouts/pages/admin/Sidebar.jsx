import NavLink from "@/components/ui/Links/nav-link";
import Link from "next/link";
import React from "react";
import { GrReactjs } from "react-icons/gr";
import { HiHome, HiUsers } from "react-icons/hi2";

const Sidebar = () => {
  return (
    <aside className="max-w-[280px] space-y-1 w-full child:flex child:items-center child:gap-3 child:px-10 child:py-1.5 py-10 p-4">
      <NavLink exact={true} href={"/admin"}>
        <span className="text-xl text-zinc-500">
          <HiHome />
        </span>
        <span className="font-YekanBakh-Medium pt-1.5 text-lg">خانه</span>
      </NavLink>
      <NavLink exact={true} href={"/admin/languages"}>
        <span className="text-xl text-zinc-500">
          <GrReactjs />
        </span>
        <span className="font-YekanBakh-Medium pt-1.5 text-lg">زبان ها</span>
      </NavLink>
      <NavLink exact={true} href={"/admin/users"}>
        <span className="text-xl text-zinc-500">
          <HiUsers />
        </span>
        <span className="font-YekanBakh-Medium pt-1.5 text-lg">کاربران</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
