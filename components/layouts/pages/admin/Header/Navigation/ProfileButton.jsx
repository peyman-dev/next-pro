"use client";
import classNames from "classnames";
import React, { useState, useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";

const ProfileButton = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cardCn = classNames(
    "w-[256px] duration-300 z-20 rounded-lg top-[110%] overflow-hidden border-white/10 bg-black border absolute",
    {
      "opacity-0 invisible": !isMenuVisible,
    }
  );

  const btnCn = classNames(
    "flex-center text-base size-6 rounded-lg hover:bg-white/10 text-white/80 duration-150 hover:text-white",
    {
      "bg-white/10": isMenuVisible,
    }
  );

  return (
    <div className="relative">
      <button onClick={toggleMenu} className={btnCn}>
        <HiOutlineArrowsUpDown />
      </button>
      <div ref={menuRef}>
        <div className={cardCn}>
          <div className="w-full h-10 bg-zinc-950 relative flex items-center focus-within:bg-zinc-800/30 duration-150">
            <span className="text-zinc-500 absolute right-2">
              <BsSearch />
            </span>
            <input
              type="text"
              placeholder="جستجوی کاربر"
              className="w-full bg-transparent absolute placeholder:text-zinc-600 h-full outline-none px-8"
            />
          </div>
          <div className="p-2">
            <article className="flex gap-2 items-center duration-150 rounded-md hover:bg-zinc-900/60 cursor-pointer select-none p-2">
              <p className="size-6 rounded-full bg-gradient-to-tl from-pink-500 to-sky-500"></p>
              <div>حساب من</div>
            </article>

            <section className="mt-2 p-2">
              <p className="font-YekanBakh-Medium text-sm text-zinc-500">
                آخرین انتخاب‌ها
              </p>
              <section className="mt-2 space-y-1">
                <article className="flex gap-2 items-center duration-150 rounded-md hover:bg-zinc-900/60 cursor-pointer select-none p-2">
                  <p className="size-6 rounded-full bg-gradient-to-tl from-blue-500"></p>
                  <div>تیم من</div>
                </article>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
