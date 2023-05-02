import { useState } from "react";

import "./App.css";
import { reviews } from "./constants/preview";
import StartScreen from "./StartScreen";
import Review from "./Review";
import { theoryQuestions } from "./constants/theory";
import Test from "./Test";

const modes = {
  start: 1,
  review: 2,
  theory: 3,
  choices: 4,
  test: 5,
};

function App() {
  const [mode, setMode] = useState(modes.start);

  return (
    <div>
      <div className="App-header">
        {mode === modes.start && (
          <StartScreen
            onClickTest={() => {
              setMode(modes.test);
            }}
            onClickReview={() => {
              setMode(modes.review);
            }}
            onClickTheory={() => {
              setMode(modes.theory);
            }}
            onClickChoices={() => {
              setMode(modes.choices);
            }}
          />
        )}
        {mode === modes.test && (
          <Test
            onClickBack={() => {
              setMode(modes.start);
            }}
          />
        )}
        {mode === modes.review && (
          <Review
            onClickBack={() => {
              setMode(modes.start);
            }}
            reviews={reviews}
          />
        )}
        {mode === modes.theory && (
          <Review
            onClickBack={() => {
              setMode(modes.start);
            }}
            reviews={theoryQuestions.map(({ question, answer }) => {
              return { title: question, content: answer.join("\n") };
            })}
          />
        )}
      </div>
    </div>
  );
}

export default App;
