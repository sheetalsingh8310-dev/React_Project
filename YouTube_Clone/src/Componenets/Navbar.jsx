import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import menu_icon from "../assets/menu.png";
import more_icon from "../assets/more.png";
import notificaton_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
      {/* Left: Menu & Logo */}
      <div className="flex items-center space-x-3">
        <img src={menu_icon} alt="menu" className="w-6 h-6 cursor-pointer" />
        <img src={logo} alt="logo" className="w-24 h-auto" />
      </div>

      {/* Center: Search Bar */}
      <div className="flex items-center flex-1 max-w-md mx-4">
        <input
          type="text"
          placeholder="Search here"
          className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="px-3 py-2 bg-indigo-200 text-black rounded-r-md hover:bg-indigo-400">
          <img src={search_icon} alt="search" className="w-5 h-5" />
        </button>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <img src={upload_icon} alt="upload" className="w-6 h-6 cursor-pointer" />
        <img src={more_icon} alt="more" className="w-6 h-6 cursor-pointer" />
        <img src={notificaton_icon} alt="notification" className="w-6 h-6 cursor-pointer" />
        <img src={profile_icon} alt="profile" className="w-8 h-8 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
