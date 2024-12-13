import React from "react";
import Links from "./Links";
import ProfileButton from "./ProfileButton";

const Navigation = ({ user }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex text-sm font-YekanBakh-Medium items-center gap-2 ">
        <p>سلام {user.fullname} عزیز</p>
        <p className="text-xs pt-1 rounded-lg px-2 bg-white/10">{user.role}</p>
        <ProfileButton />
      </div>
      <Links />
    </div>
  );
};

export default Navigation;
