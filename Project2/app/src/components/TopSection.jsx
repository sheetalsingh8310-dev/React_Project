import React from "react";
import SearchInput from "./SearchInput";
const TopSection = ({search,setSearch}) => {
  return (
    <div className="Topsection">
      <img src="./image.png"></img>

      <div className="btn">
        <button>All</button>
        <button>BreakFast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>

      <SearchInput  search={search} setSearch={setSearch}/>
    </div>
  );
};

export default TopSection;
