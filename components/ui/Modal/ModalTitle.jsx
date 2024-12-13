"use client";
import ModalContext from "@/utils/contexts/modalContext";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";

const ModalTitle = ({ children }) => {
  const context = useContext(ModalContext);


  return <header className="flex items-center justify-between px-4">
    <p className="text-lg font-YekanBakh-Heavy">{children}</p>
    <button onClick={context.toggle}>
      <MdClose />
    </button>
  </header>;
};

export default ModalTitle;
