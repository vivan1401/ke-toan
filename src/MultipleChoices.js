import { useState } from "react";
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
  return (
    <>
      <div style={{ marginBottom: "1em" }}>
        <button onClick={onClickBack}>
          Trở về
        </button>
      </div>
      <b style={{ whiteSpace: "pre-wrap" }}>
        {`${currentQuestion + 1}. ${questions[currentQuestion].question}`}
      </b>
      <ol type="A">
        {questions[currentQuestion].answers.map((a, index) => {
          return (
            <li
              key={index}
              style={{
                margin: "0.4em 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                {a}
              </div>
            </li>
          );
        })}
      </ol>
      <div>Đáp án {getAnswer(questions[currentQuestion].result)}</div>
      <div style={{ marginTop: "1em" }}>
        <button
          onClick={() => {
            setCurrentQuestion(currentQuestion + 1);
          }}
          disabled={currentQuestion === questions.length - 1}
        >
          Câu kế tiếp
        </button>
      </div>
    </>
  );
}

export default MultipleChoices;
