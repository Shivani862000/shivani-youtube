import React from 'react';
import { MdSubscriptions } from 'react-icons/md';

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
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="bg-gray-900 text-white h-full w-16 relative top-[0px] left-0 overflow-y-auto">
      <div className="flex flex-col items-center mt-4">
        <div className="mb-4 cursor-pointer">
          <FiHome size={20} />
          <span className="text-xs mt-1">Home</span>
        </div>
        <FiTrendingUp className="mb-4 cursor-pointer" size={20} />
        <MdSubscriptions className="mb-4 cursor-pointer" size={20} />
        <FiVideo className="mb-4 cursor-pointer" size={20} />
        <FiClock className="mb-4 cursor-pointer" size={20} />
        <FiGrid className="mb-4 cursor-pointer" size={20} />
        <FiPlayCircle className="mb-4 cursor-pointer" size={20} />
      </div>
    </div>
  );
};
