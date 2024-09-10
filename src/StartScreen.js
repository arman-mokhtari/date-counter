import React from "react";

const StartScreen = ({ numQuestions }) => {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz App</h2>
      <h3>{numQuestions} questions to test your knowledge</h3>
      <button className="btn btn-ui" type="button">
        Let's start
      </button>
    </div>
  );
};

export default StartScreen;
