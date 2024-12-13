"use client";
import ModalContext from "@/utils/contexts/modalContext";
import classNames from "classnames";
import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";

export const ModalProvider = ({ children, state }) => {
  const { isOpen } = state;

  const cn = classNames(
    "w-full duration-150 fixed top-0 right-0 h-screen flex items-center justify-center bg-white/15",
    {
      "opacity-0 invisible": !isOpen,
    }
  );

  return (
    <ModalContext.Provider
      value={{
        ...state,
      }}
    >
      <div onClick={state.toggleModal} className={cn}>
        {children}
      </div>
    </ModalContext.Provider>
  );
};

export const ModalHeader = ({ title }) => {
  const context = useContext(ModalContext);

  return (
    <header className="flex  pb-3 items-center justify-between py-2 px-4">
      <p className="text-zinc-200 font-YekanBakh-Medium">{title}</p>
      <button
        onClick={() => {
          context.toggleModal();
        }}
        className="size-8 flex-center rounded-full hover:bg-red-600/20 focus-within:ring-4 ring-red-600/30 bg-red-600/10 text-red-600"
      >
        <IoClose />
      </button>
    </header>
  );
};

export const Modal = ({ children, ...props }) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-[400px] bg-[#000000] rounded-xl  p-2 ` + props["className"]}
    >
      {children}
    </div>
  );
};

export const ModalContent = ({ children, ...props }) => {
  return (
    <main
      className={
        "py-8 overflow-auto max-h-[620px] border-y space-y-2  border-white/10 " + props["className"]
      }
    >
      {children}
    </main>
  );
};

export const ModalFooter = ({ children }) => {
  const context = useContext(ModalContext);
  return (
    <footer className="flex items-center py-2 px-4 justify-end gap-2 child:px-3 child:py-1.5 child:rounded-md child:duration-150">
      <button
        onClick={context.toggleModal}
        className="bg-red-600 text-white hover:bg-opacity-90 focus-within:ring-4 ring-red-600/40"
      >
        انصراف
      </button>
      {children}
    </footer>
  );
};
