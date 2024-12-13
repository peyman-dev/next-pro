"use client";
import React from "react";
import { RiUserFollowFill } from "react-icons/ri";

const FollowButton = () => {
  return (
    <div className="px-3">
      <button className="w-full bg-indigo-600 rounded-md focus-within:ring-4 duration-150 hover:bg-opacity-90 select-none font-YekanBakh-Bold text-white h-10 flex items-center gap-1 justify-center">
        <RiUserFollowFill />
        دنبال کردن
      </button>
    </div>
  );
};

const FollowCard = ({ user }) => {
  return (
    <>
      <article className="w-full overflow-hidden rounded-md bg-white dark:bg-black border">
        <header>
          <div className="h-6 bg-black"></div>
          <div className="flex items-center justify-between w-full p-3">
            <div className="flex items-center gap-2">
              <img
                src={"/images/developer.png"}
                className="size-10 rounded-full"
                alt=""
              />
              <p className="text-lg font-YekanBakh-Heavy text-zinc-700">
                {user?.fullname}
              </p>
            </div>
            <p></p>
          </div>
          <FollowButton />
        </header>
        <main className="p-3 space-y-3">
          <div className="text-sm font-YekanBakh-Medium">
            <span className="text-zinc-400 text-xs">درباره کاربر:</span>
            <p>{user?.description}</p>
          </div>
          <div className="text-sm font-YekanBakh-Medium">
            <span className="text-zinc-400 text-xs">شغل:</span>
            <p>{user?.job}</p>
          </div>
          <div className="text-sm font-YekanBakh-Medium">
            <span className="text-zinc-400 text-xs">مشغول به کار در:</span>
            <p>{user?.job}</p>
          </div>
        </main>
      </article>
    </>
  );
};

export default FollowCard;
