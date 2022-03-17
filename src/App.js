import React, { useEffect, useMemo, useState } from "react";
import "./app.css";
import Question from "./components/Question";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [userName, setUserName] = useState(null);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id1: 1,
      question: "What is the scientific name of a butterfly?",
      answers: [
        { text: "Apis", correct: false },
        { text: "Coleoptera", correct: false },
        { text: "Formicidae", correct: false },
        { text: "Rhopalocera", correct: true },
      ],
    },
    {
      id1: 2,
      question: "How hot is the surface of the sun?",
      answers: [
        { text: "1,233 K", correct: false },
        { text: "5,778 K", correct: true },
        { text: "12,130 K", correct: false },
        { text: "101,300 K", correct: false },
      ],
    },
    {
      id1: 3,
      question: "Who are the actors in The Internship?",
      answers: [
        { text: "Ben Stiller, Jonah Hill", correct: false },
        { text: "Courteney Cox, Matt LeBlanc", correct: false },
        { text: "Kaley Cuoco, Jim Parsons", correct: false },
        { text: "Vince Vaughn, Owen Wilson", correct: true },
      ],
    },
    {
      id: 4,
      question: "What is the capital of Spain?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Buenos Aires", correct: false },
        { text: "Madrid", correct: true },
        { text: "San Juan", correct: false },
      ],
    },
    {
      id: 5,
      question:
        "What are the school colors of the University of Texas at Austin?",
      answers: [
        { text: "Black, Red", correct: false },
        { text: "Blue, Orange", correct: false },
        { text: "White, Burnt Orange", correct: true },
        { text: "White, Old gold, Gold", correct: false },
      ],
    },
    {
      id: 6,
      question: "What is 70 degrees Fahrenheit in Celsius?",
      answers: [
        { text: "18.8889", correct: false },
        { text: "20", correct: false },
        { text: "21.1111", correct: true },
        { text: "158", correct: false },
      ],
    },
    {
      id: 7,
      question: "When was Mahatma Gandhi born?",
      answers: [
        { text: "October 2, 1869", correct: true },
        { text: "December 15, 1872", correct: false },
        { text: "July 18, 1918", correct: false },
        { text: "January 15, 1929", correct: false },
      ],
    },
    {
      id: 8,
      question: "How far is the moon from Earth?",
      answers: [
        { text: "7,918 miles (12,742 km)", correct: false },
        { text: "86,881 miles (139,822 km)", correct: false },
        { text: "238,400 miles (384,400 km)", correct: true },
        { text: "35,980,000 miles (57,910,000 km)", correct: false },
      ],
    },
    {
      id: 9,
      question: "When did The Avengers come out?",
      answers: [
        { text: "May 4, 2012", correct: true },
        { text: "May 2, 2008", correct: false },
        { text: "May 3, 2013", correct: false },
        { text: "April 4, 2014", correct: false },
      ],
    },
    {
      id: 10,
      question: "What is 48,879 in hexidecimal?",
      answers: [
        { text: "0x18C1", correct: false },
        { text: "0xDEAD", correct: false },
        { text: "0x12D591", correct: false },
        { text: "0xBEEF", correct: true },
      ],
    },
    {
      id: 11,
      question:
        "‘Remove laws that harm; Create laws that empower’ is the theme of which day celebrated on March 1?",
      answers: [
        { text: "Zero Discrimination Day", correct: true },
        { text: "World Equality Day", correct: false },
        { text: "World AIDS Day", correct: false },
        { text: "World Social Justice Day", correct: false },
      ],
    },
    {
      id: 12,
      question:
        "Which species of frog is the officially largest frog in the world?",
      answers: [
        { text: "African Bull frog", correct: false },
        { text: "American Bull frog", correct: false },
        { text: "Cane Toad", correct: false },
        { text: "Goliath frog", correct: true },
      ],
    },
    {
      id: 13,
      question:
        "Which of the following mountain ranges form a dividing line between the Ganges Plain and the Deccan Plateau?",
      answers: [
        { text: "Aravalli", correct: false },
        { text: "Vindhya and Satpura", correct: true },
        { text: "Shivalik", correct: false },
        { text: "Eastern Ghats", correct: false },
      ],
    },
  ];
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1000" },
        { id: 2, amount: "₹ 10000" },
        { id: 3, amount: "₹ 20000" },
        { id: 4, amount: "₹ 40000" },
        { id: 5, amount: "₹ 80000" },
        { id: 6, amount: "₹ 200000" },
        { id: 7, amount: "₹ 500000" },
        { id: 8, amount: "₹ 1000000" },
        { id: 9, amount: "₹ 1500000" },
        { id: 10, amount: "₹ 2500000" },
        { id: 11, amount: "₹ 5000000" },
        { id: 12, amount: "₹ 10000000" },
        { id: 13, amount: "₹ 50000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="App">
      {userName ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned:{earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Question
                    data={data}
                    questionNumber={questionNumber}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneylist">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
}

export default App;
