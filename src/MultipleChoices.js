import { useState } from "react";
import Check from "./check.svg";
import { questions } from "./constants/questions";

const getAnswer = (a) => {
  switch (a) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";

    default:
      return;
  }
};

function MultipleChoices({ onClickBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState();
  const [showResult, setShowResult] = useState(false);
  return (
    <>
      <div style={{ marginBottom: "1em" }}>
        <button onClick={onClickBack}>Trở về</button>
      </div>
      <b style={{ whiteSpace: "pre-wrap" }}>
        {`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
      </b>
      <ol type="A">
        {questions[currentQuestion].answers.map((a, index) => {
          return (
            <li
              key={index}
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
      <div style={{ marginTop: "1em" }}>
        {showResult ? (
          <button
            onClick={() => {
              setShowResult(false);
              setChosenAnswer(false);
              setCurrentQuestion(currentQuestion + 1);
            }}
            disabled={currentQuestion === questions.length - 1}
          >
            Câu kế tiếp
          </button>
        ) : (
          <button onClick={() => setShowResult(true)}>Đáp án</button>
        )}
      </div>
    </>
  );
}

export default MultipleChoices;
