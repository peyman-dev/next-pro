"use client";
import React from "react";
import useUserStore from "@/utils/stores/user-store";
import Link from "next/link";
import { Box } from "lucide-react";
import ProfileDropdown from "@/components/ui/buttons/profile-dropdown";

const Header = () => {
  const { isLoggedIn, user } = useUserStore();
  
  const className =
    "size-9 flex-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg";

  return (
    <header className="flex items-center child:flex child:items-center child:gap-5 justify-between px-20 py-6 border-b">
      <div>
        <Link
          className="tracking-tight ml-6 font-YekanBakh-Fat text-2xl"
          href={"/"}
        >
          نکست پرو
        </Link>
        <Link
          href={"/"}
          className="font-YekanBakh-Medium text-zinc-700 dark:text-zinc-300"
        >
          خانه
        </Link>
        <Link
          href={"/explore/languages"}
          className="font-YekanBakh-Medium text-zinc-700 dark:text-zinc-300"
        >
          پرسش و پاسخ
        </Link>
        <Link
          href={"/explore/articles"}
          className="font-YekanBakh-Medium text-zinc-700 dark:text-zinc-300"
        >
          مقالات
        </Link>
        <Link
          href={"/"}
          className="px-4 text-sm flex items-center gap-2 py-1.5 pt-2 rounded-md bg-zinc-900 text-white"
        >
          کامپوننت ها
          <Box className="size-5 mb-0.5" />
        </Link>
      </div>
      <div>
        <ProfileDropdown />
      </div>
    </header>
  );
};



export default Header;

//  <header
//   id="header"
//   className="flex-center z-20  bg-white/50 backdrop-blur-sm rounded-2xl  text-lg gap-1 fixed px-1.5 h-[48px]  dark:!bg-zinc-950/80 border left-0 bottom-10 right-0 mx-auto max-w-max"
// >
//   <ThemeButton />
//   <AdminRoute role={user?.role} />
//   <Tooltip
//     position="top"
//     content={isLoggedIn ? user?.fullname : "حساب کاربری"}
//   >
//     <NavLink
//       href={isLoggedIn ? "/profile" : "/auth/"}
//       class={className}
//       activeClass="dark:bg-zinc-800 bg-zinc-100"
//     >
//       <HiOutlineUser />
//     </NavLink>
//   </Tooltip>
//   <Tooltip position="top" content={"کامپوننت ها"}>
//     <NavLink
//       href={"/components"}
//       class={className}
//       activeClass="dark:bg-zinc-800 bg-zinc-100"
//     >
//       <BsBoxSeam />
//     </NavLink>
//   </Tooltip>
//   <Tooltip content={"آزمایشگاه"}>
//     <NavLink
//       href={"/lab"}
//       class={className}
//       activeClass="dark:bg-zinc-800 bg-zinc-100"
//     >
//       <ImLab />
//     </NavLink>
//   </Tooltip>

//   <Tooltip content={"پرسش ها"}>
//     <NavLink
//       href={"/articles"}
//       class={className}
//       activeClass="dark:bg-zinc-800 bg-zinc-100"
//     >
//       <BsBook />
//     </NavLink>
//   </Tooltip>

//   <Tooltip content={"خانه"} position={"top"}>
//     <NavLink
//       class={className}
//       activeClass="dark:bg-zinc-800 bg-zinc-100"
//       href={"/"}
//     >
//       <HiHome />
//     </NavLink>
//   </Tooltip>
// </header>
