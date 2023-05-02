import { useEffect, useMemo, useState } from "react";
import Check from "./check.svg";
import { questions as originQuestions } from "./constants/questions";

const questionsPerTopic = 20;
const COUNT_DOWN_TIME = 900;

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
  const [isTimeUp, setIsTimeUp] = useState(false);

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

  const countDown = useMemo(
    () => (
      <CountDown
        onTimeUp={() => {
          setIsTimeUp(true);
        }}
      />
    ),
    [isTimeUp]
  );

  const renderQuestions = () => (
    <>
      {countDown}
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
      {isTimeUp && <div>Hết thời gian</div>}
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
            setIsTimeUp(false);
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

  return currentQuestion < questions.length && !isTimeUp
    ? renderQuestions()
    : renderResult();
}

function CountDown({ onTimeUp }) {
  const [minutes, setMinutes] = useState(Math.floor(COUNT_DOWN_TIME / 60));
  const [seconds, setSeconds] = useState(COUNT_DOWN_TIME % 60);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          onTimeUp();
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <h2>Hết thời gian</h2>
      ) : (
        <h2>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h2>
      )}
    </div>
  );
}

export default Test;
