const RollDice = ({ currentDice,rollDice}) => {

 return (
    <>
      <div className="Dice" onClick={rollDice} >
        <img src={`./Dice/image${currentDice}.png`} alt="dice" />
      </div>
    </>
  );
};

export default RollDice;
