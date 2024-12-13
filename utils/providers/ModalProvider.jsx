import React from "react";
import ModalContext from "../contexts/modalContext";

const ModalProvider = ({ isOpen, toggle, children }) => {
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggle,
      }}
    >
        {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
