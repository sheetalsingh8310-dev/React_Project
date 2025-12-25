const TotalScore = ({score}) => {
  return (
    <>
      <div className="nav">
        <div style={{ textAlign: "center" }}>
          <h1>{score}</h1>
          <h2>Total Score</h2>
        </div>
      </div>
    </>
  );
};

export default TotalScore;
