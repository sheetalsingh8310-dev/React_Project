import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input 
      type="text" 
      className={styles.display} 
      value={displayValue} 
      readOnly // Add this line to fix the error
      placeholder="0"
    />
  );
};

export default Display;