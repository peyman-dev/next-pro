"use client";
import useStyles from "@/utils/hooks/useStyles";
import Link from "next/link";
import React from "react";

const UserProfileCard = ({ user }) => {
  const { labelStyles } = useStyles();
  return (
    <>
      <div>
        <p className={labelStyles}>حساب شما:</p>
        <Link
          href={`/profile/${user.username}`}
          className="flex max-w-max items-center gap-2"
        >
          <span className="size-8 rounded-full bg-gradient-to-b from-sky-500 to-emerald-300"></span>
          <div>
            <div className="flex items-center gap-1">
              <p className="font-YekanBakh-Bold text-lg">{user.fullname}</p>
              <p className="text-xs px-3 py-1 rounded-3xl bg-teal-600/10 pt-1.5 text-teal-500">
                {user.role}
              </p>
            </div>
            <p className="text-xs font-YekanBakh-Medium  text-zinc-400">
              @{user.username}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UserProfileCard;
