import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import TotalScore from "./TotalScore";
import Rules from "./Rules";

function GamePlay() {
  const [currentDice, setCurrentDice] = useState(1);
  const [SelectedNumber,SetSelectedNumber]=useState();
  const [Score,setScore]=useState(0);
  const [Error,SetError]=useState()
  const [showrules,setshowrules]=useState(false);

   const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!SelectedNumber){
      SetError("You have not selected any number")
      return;
    }
    SetError(" ");
    const randomNumber = generateRandomNumber(1, 7); // 1 to 6
    setCurrentDice(randomNumber); // update UI

    if(SelectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber);

        
    }else{
      setScore((prev)=>prev-2)
    }
    SetSelectedNumber(undefined)
  };

  const resetScore=()=>{
    setScore(0);
  }


  return (
    <>
     <div className="number-selector">
         <TotalScore score={Score} />
          < NumberSelector SelectedNumber={SelectedNumber}
           SetSelectedNumber={SetSelectedNumber} error={Error}
           SetError={SetError}/>
            <h2>Select Number</h2>
            </div>
        <div className="dice-section">
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <h1>Click on dice to roll</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={resetScore}>Reset Score</button>
        <button onClick={()=>setshowrules((prev)=>!prev)}>
          
          {showrules?"hide":"show" }Show rules</button>
        {showrules && <Rules/>}
      </div>
    </>
  );
}

export default GamePlay;