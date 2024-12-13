import classNames from "classnames";
import React from "react";

const Switch = ({ toggle, setToggle, theme = "black", id, fn }) => {
  const switchCn = classNames(
    "bg-black px-0.5 flex items-center w-12 h-6 rounded-full cursor-pointer",
    {
      "bg-indigo-700": toggle,
    }
  );

  const circleCn = classNames(
    "w-5 h-5 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out",
    {
      "-translate-x-[23px] bg-white": toggle,
      "translate-x-0": !toggle,
    }
  );

  const properties = {
    onClick: () => {
      if (setToggle) {
        setToggle(!toggle);
      } else {
        fn();
      }
    },
    className: switchCn,
  };

  return (
    <div {...properties}>
      <div className={circleCn}></div>
    </div>
  );
};

export default Switch;
