import React from 'react';
import { MdSubscriptions } from "react-icons/md";

import {
  FiHome,
  FiTrendingUp,
  FiVideo,
  FiClock,
  FiGrid,
  FiPlayCircle,
} from 'react-icons/fi';
import { useSelector } from 'react-redux';
export const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  // console.log(isMenuOpen)
if(!isMenuOpen) return null;
  return (
    <div className="bg-gray-900 text-white h-screen w-16 realtive  top-[77px] left-0 overflow-y-auto">
      <div className="flex flex-col items-center mt-4">
        <FiHome className="mb-4 cursor-pointer" size={20} />
        <FiTrendingUp className="mb-4 cursor-pointer" size={20} />
        <MdSubscriptions  className="mb-4 cursor-pointer" size={20} />
        <FiVideo className="mb-4 cursor-pointer" size={20} />
        <FiClock className="mb-4 cursor-pointer" size={20} />
        <FiGrid className="mb-4 cursor-pointer" size={20} />
        <FiPlayCircle className="mb-4 cursor-pointer" size={20} />
      </div>
    </div>
  );
};

