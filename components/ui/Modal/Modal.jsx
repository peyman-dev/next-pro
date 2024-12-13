"use client";
import ModalContext from "@/utils/contexts/modalContext";
import React, { useContext } from "react";

const Modal = ({ children }) => {
  const context = useContext(ModalContext);

  return (
    <div
      onClick={() => {
        context.toggle();
      }}
      className={`w-screen  !h-screen fixed !top-0 !right-0 bg-black/40 flex-center duration-300 ${
        context.isOpen ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[400px] rounded-2xl p-4 bg-white"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
