import React from "react";
import { Poppins } from "next/font/google";

const Font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const Logo = () => {
  return (
    <div className="flex relative items-center gap-2">
      <img src="/images/icon.svg" alt="" className="w-20 rotate-90" />
      <p className={` text-5xl font-YekanBakh-Fat`}>نکست پرو</p>
    </div>
  );
};

export default Logo;
