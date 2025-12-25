import './App.css'
import { useState } from 'react';
import GamePlay from './Components/GamePlay';
import StartGame from './Components/StartGame'
function App() {
const [isGameStarted,setisGameStarted]=useState(false);
let prev;
    const toggleGamePlay=()=>{
        setisGameStarted((prev=!prev))
    
  }
  return (
    <>
    {isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    
        
    </>
  )
}

export default App
