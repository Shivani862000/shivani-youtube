import React from "react";

export const Button = ({name}) => {
  return (
    <>
      <button className=" rounded-lg px-6 py-2 bg-gray-300 text-nowrap text-gray-600 hover:bg-gray-700 duration-300 hover:text-white">    {name}
      </button>
    </>
  );
};
