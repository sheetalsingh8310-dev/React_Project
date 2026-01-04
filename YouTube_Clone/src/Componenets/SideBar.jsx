import React from "react";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import blogs from "../assets/blogs.png";
import music from "../assets/music.png";

import news from "../assets/news.png";
// import jack from "../assets/jack.png";
// import tom from "../assets/tom.png";
// import megan from "../assets/megan.png";
// import cameron from "../assets/cameron.png";

const SideBar = () => {
  return (
    <aside className="w-60 min-h-screen bg-gray-800 text-white shadow-lg flex flex-col py-6 px-4">
      <h2 className="text-xl font-bold mb-6 text-center">Categories</h2>

      {/* Menu Items */}
      <nav className="flex flex-col space-y-4">
        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={home} alt="Home" className="w-5 h-5" />
          <span className="text-base font-medium">Home</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={game_icon} alt="Gaming" className="w-5 h-5" />
          <span className="text-base font-medium">Gaming</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={automobiles} alt="Automobiles" className="w-5 h-5" />
          <span className="text-base font-medium">Automobiles</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={sports} alt="Sports" className="w-5 h-5" />
          <span className="text-base font-medium">Sports</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={entertainment} alt="Entertainment" className="w-5 h-5" />
          <span className="text-base font-medium">Entertainment</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={tech} alt="Tech" className="w-5 h-5" />
          <span className="text-base font-medium">Tech</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={music} alt="Music" className="w-5 h-5" />
          <span className="text-base font-medium">Music</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={blogs} alt="Blogs" className="w-5 h-5" />
          <span className="text-base font-medium">Blogs</span>
        </div>

        <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded-md cursor-pointer">
          <img src={news} alt="News" className="w-5 h-5" />
          <span className="text-base font-medium">News</span>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
