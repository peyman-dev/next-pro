import React from "react";

const Loading = ({ className }) => {
  return (
    <div
      className={`flex flex-row gap-2 w-full h-screen fixed justify-center items-center top-0 right-0 ${className}`}
    >
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
};

export default Loading;
