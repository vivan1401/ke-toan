import { useState } from "react";
import { theoryQuestions } from "./constants/theory";

function Theory({ onClickBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  const onShowAnswer = () => {
    setIsShowAnswer(true);
  };
  const onNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setIsShowAnswer(false);
  };
  const onPrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
    setIsShowAnswer(false);
  };

  return (
    <div style={{ width: "100%" }}>
      <button style={{ marginBottom: "1em" }} onClick={onClickBack}>
        Trở về
      </button>
      <div>
        <b style={{ whiteSpace: "pre-wrap" }}>
          {`Câu ${currentQuestion + 1}: ${
            theoryQuestions[currentQuestion].question
          }`}
        </b>
      </div>
      <div style={{ margin: "1em 0" }}>
        <textarea style={{ width: "100%" }} rows={8} />
      </div>
      {isShowAnswer && (
        <div style={{ whiteSpace: "pre-wrap" }}>
          {theoryQuestions[currentQuestion].answer.join("\n")}
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1em",
        }}
      >
        <button onClick={onPrevQuestion} disabled={currentQuestion === 0}>
          Câu trước
        </button>
        <button onClick={onShowAnswer} disabled={isShowAnswer}>
          Đáp án
        </button>
        <button
          onClick={onNextQuestion}
          disabled={currentQuestion === theoryQuestions.length - 1}
        >
          Câu kế tiếp
        </button>
      </div>
    </div>
  );
}

export default Theory;
