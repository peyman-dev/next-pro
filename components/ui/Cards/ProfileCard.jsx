import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex p-2 duration-300 select-none max-w-max rounded-md cursor-pointer hover:scale-105 items-center gap-3">
      <div>
        <img
          src="/images/profile.png"
          className="size-14 rounded-full object-cover"
          alt=""
        />
      </div>
      <div>
        <p className="text-lg font-YekanBakh-Heavy">پیمان احمدی</p>
        <p className="text-sm font-YekanBakh-Medium text-zinc-600 dark:text-zinc-300">
          برنامه نویس React.js - بنیان گذار نکست پرو
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
