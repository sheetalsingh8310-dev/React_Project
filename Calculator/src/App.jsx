import { useState } from "react";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

function App() {
  const [calVal, setCalVal] = useState("");

    // const buttonClick=(event)=>{
  //   console.log("button click" +event)

  // }

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal(""); // Add this line to clear the display
    } else if (buttonText === "=") {
      // Add calculation logic here
      try {
        const result = eval(calVal); //eval evaluate value 
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  
  return (
    <>
      <div className={styles.container}>
        <Display displayValue={calVal}></Display>
        <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
    </>
  );
}

export default App;