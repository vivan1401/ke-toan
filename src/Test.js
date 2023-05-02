import { useState } from "react";
import Check from "./check.svg";
import { questions as originQuestions } from "./constants/questions";

const questionsPerTopic = 20;

const randomQuestions = (topic) => {
  let cloneQuestions = [
      ...originQuestions.slice(
        topic * questionsPerTopic,
        (topic + 1) * questionsPerTopic
      ),
    ],
    ranNums = [];
  let i = cloneQuestions.length,
    j = 0;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    ranNums.push(cloneQuestions[j]);
    cloneQuestions.splice(j, 1);
  }

  return ranNums;
};

function Test({ onClickBack }) {
  const [topic, setTopic] = useState(undefined);
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState();
  const [showResult, setShowResult] = useState(false);
  const [finalResult, setFinalResult] = useState(0);

  const renderTopics = () =>
    Array.from(Array(10).keys()).map((i) => {
      return (
        <h2
          style={{ cursor: "pointer", margin: 0 }}
          onClick={() => {
            setTopic(i);
            setQuestions(randomQuestions(i));
          }}
        >
          Đề số {i + 1}
        </h2>
      );
    });

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
      <button
        onClick={() => {
          if (chosenAnswer === questions[currentQuestion].result) {
            setFinalResult(finalResult + 1);
          }
          setShowResult(false);
          setChosenAnswer(false);
          setCurrentQuestion(currentQuestion + 1);
        }}
      >
        Câu kế tiếp
      </button>
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
            setQuestions();
            setTopic(undefined);
          }}
        >
          Làm lại
        </button>
        <button onClick={onClickBack}>Trở về</button>
      </div>
    </div>
  );

  if (topic === undefined) {
    return (
      <>
        <button style={{ marginBottom: "1em" }} onClick={onClickBack}>
          Trở về
        </button>
        {renderTopics()}
      </>
    );
  }

  return currentQuestion < questions.length
    ? renderQuestions()
    : renderResult();
}

export default Test;
