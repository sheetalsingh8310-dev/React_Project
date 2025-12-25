import Box from "./Box";

function NumberSelector({ error,SelectedNumber,SetSelectedNumber, SetError}) {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler=(value)=>{
    SetSelectedNumber(value)
    SetError("");
  }
  
  

  return <> <p>{error}</p>
    <div className="number-selector">
      {arrNumber.map((value ,i) => (
        <Box isSelected={value===SelectedNumber}
        key={i}
        onClick={()=>numberSelectorHandler(value)}>{value}</Box>
      ))}
    </div></>
  
 
}

export default NumberSelector;
