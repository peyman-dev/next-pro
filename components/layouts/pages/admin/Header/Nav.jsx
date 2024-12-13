import NavLink from "@/components/ui/Links/nav-link";
import React from "react";

const Nav = () => {
  return (
    <nav className="mt-3 child:relative child:px-4 child:py-1.5 child:rounded-md mb-1 text-white-60 child:duration-150 flex text-sm font-YekanBakh-Medium items-center gap-1 text-zinc-500">
      <NavLink
        href={"/admin"}
        exact={true}
        className={
          "hover:bg-white/5 before:duration-150 before:-bottom-1 before:w-full before:h-px before:bg-white before:absolute  before:opacity-0 before:left-0 "
        }
        activeCn="before:!left-0 before:opacity-100 text-white"
      >
        نگاه کلی
      </NavLink>
      <NavLink
        href={"/admin/languages"}
        exact={true}
        className={
          "hover:bg-white/5 before:duration-150 before:-bottom-1 before:w-full before:h-px before:bg-white before:absolute  before:opacity-0 before:left-0 "
        }
        activeCn="before:!left-0 before:opacity-100 text-white"
      >
        دسته‌بندی ها
      </NavLink>
      <NavLink
        href={"/admin/users"}
        exact={true}
        className={
          "hover:bg-white/5 before:duration-150 before:-bottom-1 before:w-full before:h-px before:bg-white before:absolute  before:opacity-0 before:left-0 "
        }
        activeCn="before:!left-0 before:opacity-100 text-white"
      >
        کاربران
      </NavLink>
      <NavLink
        href={"/admin/comments"}
        exact={true}
        className={
          "hover:bg-white/5 before:duration-150 before:-bottom-1 before:w-full before:h-px before:bg-white before:absolute  before:opacity-0 before:left-0 "
        }
        activeCn="before:!left-0 before:opacity-100 text-white"
      >
        نظرات
      </NavLink>
      <NavLink
        href={"/admin/questions"}
        exact={true}
        className={
          "hover:bg-white/5 before:duration-150 before:-bottom-1 before:w-full before:h-px before:bg-white before:absolute  before:opacity-0 before:left-0 "
        }
        activeCn="before:!left-0 before:opacity-100 text-white"
      >
        پرسش‌ها
      </NavLink>
      <NavLink
        href={"/admin/articles"}
        exact={true}
        className={
          "hover:bg-white/5 before:duration-150 before:-bottom-1 before:w-full before:h-px before:bg-white before:absolute  before:opacity-0 before:left-0 "
        }
        activeCn="before:!left-0 before:opacity-100 text-white"
      >
        مقالات
      </NavLink>
    </nav>
  );
};

export default Nav;
