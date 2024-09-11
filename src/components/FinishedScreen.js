import React from "react";

const FinishedScreen = ({ points, maxPossiblePoints, highscore,dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;

  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🎉"; 
  else if (percentage >= 50) emoji = "😄"; 
  else if (percentage > 0) emoji = "🤔";
  else emoji = "😢";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(highscore: {highscore} points)</p>
      <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
    </>
  );
};

export default FinishedScreen;
