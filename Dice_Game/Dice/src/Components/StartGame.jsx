import { useState } from "react";
import Style from "./StartGame.module.css"


function StartGame({toggle}){
    

    return<>

         <img src="./image.png" className={Style.pic}></img> 
   
        <span><h1>DICE GAME</h1></span>
        <br></br>
        <button onClick={toggle}>Play Now</button>
    </>

}

export default StartGame;