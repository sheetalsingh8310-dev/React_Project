import React from "react";
import Navbar from "./Components/Navbar";
import NewsItem from "./Components/NewsItem";
import NewsBoard from "./Components/NewsBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

const App = () => {
  const [category, setcategory] = useState("technology");

  return (
    <div>
      <Navbar setcategory={setcategory} />
      <br></br>

      <hr></hr>
      <NewsBoard category={category} />

      <NewsItem />
    </div>
  );
};

export default App;
