import React from "react";
import { ToastContainer, Bounce } from "react-toastify";

const ToastProvider = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        bodyClassName={"font-YekanBakh-Medium"}
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      {children}
    </>
  );
};

export default ToastProvider;
