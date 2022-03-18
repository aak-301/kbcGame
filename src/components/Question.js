import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import src_sounds_play from "../assets/src_sounds_play.mp3";
import src_sounds_correct from "../assets/src_sounds_correct.mp3";
import src_sounds_wrong from "../assets/src_sounds_wrong.mp3";

export default function Question({
  data,
  questionNumber,
  setStop,
  setQuestionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectAnswer, setSelectAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(src_sounds_play);
  const [correctAnswer] = useSound(src_sounds_correct);
  const [wrongAnswer] = useSound(src_sounds_wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    setSelectAnswer(ans);

    setClassName("answer active");

    delay(3000, () =>
      setClassName(ans.correct ? "answer correct" : "answer wrong")
    );

    delay(5000, () => {
      if (questionNumber > 12) return setStop(true);
      if (ans.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="quesanswer">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((ans) => (
          <div
            className={selectAnswer === ans ? className : "answer"}
            onClick={() => handleClick(ans)}
          >
            {ans.text}
          </div>
        ))}
      </div>
    </div>
  );
}
