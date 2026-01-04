import "./App.css";
import Navbar from "./Componenets/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home";
import Video from "./Componenets/Video";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video/:categoryId/:videoId" element={<Video />}></Route>
      </Routes>
    </>
  );
}

export default App;
