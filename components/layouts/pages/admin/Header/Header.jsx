import { getMe } from "@/app/actions";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Nav from "./Nav";

const Header = async () => {
  const user = await getMe();

  return (
    <header className="border-b w-full bg-white/5 px-4 pt-4 border-white/10">
      <Navigation user={user} />
      <Nav />
    </header>
  );
};

export default Header;
