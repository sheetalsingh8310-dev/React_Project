function Box({ isSelected, onClick, children }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "15px 20px",
        border: "1px solid black",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: isSelected ? "black" : "white",
        color: isSelected ? "white" : "black",
        fontWeight: "bold",
      }}
    >
      {children}
    </div>
  );
}

export default Box;
