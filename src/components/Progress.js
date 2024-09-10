import React from "react";

const Progress = ({ index, numQuestion, points, maxPossiblePoints,answer }) => {
  return (
    <header className="progress">
        <progress value={index + Number(answer !==null)} max={numQuestion}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
