import React from "react";

export const Button = ({name}) => {
  return (
    <>
      <button className="min-w-[60px] rounded-lg px-4 py-2 bg-gray-300 text-gray-600 hover:bg-gray-700 duration-300">    {name}
      </button>
    </>
  );
};
