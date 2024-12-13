import Header from "@/components/layouts/pages/admin/Header/Header";
import Sidebar from "@/components/layouts/pages/admin/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <section className="w-full text-white min-h-screen pb-10 bg-black">
      <Header />
      <section className="my-10 container">{children}</section>
    </section>
  );
};

export default layout;
