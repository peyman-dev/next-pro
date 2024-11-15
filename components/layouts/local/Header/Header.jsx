import ThemeButton from "@/components/ui/buttons/ThemeButton";
import NavLink from "@/components/ui/Links/NavLink";
import React from "react";
import { HiHome, HiOutlineUser } from "react-icons/hi2";
import { ImLab } from "react-icons/im";
import { BsBook, BsBoxSeam } from "react-icons/bs";
import Tooltip from "@/components/ui/Tooltip";

const Header = () => {
  const className =
    "size-9 flex-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg";

  return (
    <header
      id="header"
      className="flex-center  bg-white/50 backdrop-blur-sm rounded-2xl  text-lg gap-1 fixed px-1.5 h-[48px]  dark:bg-zinc-950/80  border left-0 bottom-10 right-0 mx-auto max-w-max"
    >
      <ThemeButton />
      <Tooltip position="top" content={"حساب کاربری"}>
        <NavLink
          href={"/auth/"}
          class={className}
          activeClass="dark:bg-zinc-800 bg-zinc-100"
        >
          <HiOutlineUser />
        </NavLink>
      </Tooltip>
      <Tooltip position="top" content={"کامپوننت ها"}>
        <NavLink
          href={"/components"}
          class={className}
          activeClass="dark:bg-zinc-800 bg-zinc-100"
        >
          <BsBoxSeam />
        </NavLink>
      </Tooltip>
      <Tooltip content={"آزمایشگاه"}>
        <NavLink
          href={"/lab"}
          class={className}
          activeClass="dark:bg-zinc-800 bg-zinc-100"
        >
          <ImLab />
        </NavLink>
      </Tooltip>

      <Tooltip content={"مقالات"}>
        <NavLink
          href={"/articles"}
          class={className}
          activeClass="dark:bg-zinc-800 bg-zinc-100"
        >
          <BsBook />
        </NavLink>
      </Tooltip>

      <Tooltip content={"خانه"} position={"top"}>
        <NavLink
          class={className}
          activeClass="dark:bg-zinc-800 bg-zinc-100"
          href={"/"}
        >
          <HiHome />
        </NavLink>
      </Tooltip>
    </header>
  );
};

export default Header;
