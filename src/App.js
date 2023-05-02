import { useState } from "react";

import "./App.css";
import { questions as originQuestions } from "./constants/questions";
import Check from "./check.svg";
import StartScreen from "./StartScreen";
import Review from "./Review";
import Theory from "./Theory";

const randomQuestions = () => {
  var cloneQuestions = [...originQuestions],
    ranNums = [],
    i = originQuestions.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(cloneQuestions[j]);
    cloneQuestions.splice(j, 1);
  }

  return ranNums;
};

const modes = {
  start: 1,
  review: 2,
  theory: 3,
  choices: 4,
  test: 5,
};

function App() {
  const [questions, setQuestions] = useState(randomQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(questions.length);
  const [chosenAnswer, setChosenAnswer] = useState();
  const [showResult, setShowResult] = useState();
  const [finalResult, setFinalResult] = useState(0);
  const [mode, setMode] = useState(modes.start);

  const renderQuestions = () => (
    <>
      <b style={{ whiteSpace: "pre-wrap" }}>
        {`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
      </b>
      <ol type="A">
        {questions[currentQuestion].answers.map((a, index) => {
          return (
            <li
              onClick={() => {
                if (!showResult) setChosenAnswer(index);
              }}
              style={{
                cursor: showResult ? "default" : "pointer",
                margin: "0.4em 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  color:
                    showResult && index === questions[currentQuestion].result
                      ? "green"
                      : "inherit",
                }}
              >
                {index === chosenAnswer ? <b>{a}</b> : a}
                {showResult && index === questions[currentQuestion].result && (
                  <img
                    style={{ height: "1.5em", marginLeft: "1.2em" }}
                    src={Check}
                    alt="Correct"
                  />
                )}
              </div>
            </li>
          );
        })}
      </ol>
      {showResult ? (
        <button
          onClick={() => {
            if (chosenAnswer === questions[currentQuestion].result)
              setFinalResult(finalResult + 1);
            setShowResult(false);
            setChosenAnswer(false);
            setCurrentQuestion(currentQuestion + 1);
          }}
        >
          Câu kế tiếp
        </button>
      ) : (
        <button onClick={() => setShowResult(true)}>Đáp án</button>
      )}
    </>
  );

  const renderResult = () => (
    <div>
      <h2>
        Số câu đúng: {finalResult}/{questions.length}
      </h2>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={() => {
            setShowResult(false);
            setChosenAnswer(false);
            setCurrentQuestion(0);
            setFinalResult(0);
            setQuestions(randomQuestions());
          }}
        >
          Làm lại
        </button>
        <button
          onClick={() => {
            setMode(modes.start);
          }}
        >
          Trở về
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="App-header">
        {mode === modes.start && (
          <StartScreen
            onClickTest={() => {
              setShowResult(false);
              setChosenAnswer(false);
              setCurrentQuestion(0);
              setFinalResult(0);
              setQuestions(randomQuestions());
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
        {mode === modes.test &&
          (currentQuestion < questions.length
            ? renderQuestions()
            : renderResult())}
        {mode === modes.review && (
          <Review
            onClickBack={() => {
              setMode(modes.start);
            }}
          />
        )}
        {mode === modes.theory && (
          <Theory
            onClickBack={() => {
              setMode(modes.start);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
