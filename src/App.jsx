import { useState } from "react";
import Question from "./components/Question";
import Score from "./components/Score";
import "./App.css";

const questions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A database",
      "A server-side framework",
      "A CSS framework",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is a component in React?",
    options: [
      "A function or class that renders UI",
      "A database schema",
      "A server",
      "A CSS class",
    ],
    correctAnswer: "A function or class that renders UI",
  },
  {
    question: "What is the use of useState in React?",
    options: [
      "To manage state in a functional component",
      "To fetch data from an API",
      "To perform side effects",
      "To create a component",
    ],
    correctAnswer: "To manage state in a functional component",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extra",
      "Java Simple eXtension",
    ],
    correctAnswer: "JavaScript XML",
  },
  {
    question:
      "Which method is used to update state in a React class component?",
    options: ["setState", "useState", "updateState", "changeState"],
    correctAnswer: "useState",
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          correctAnswer={questions[currentIndex].correctAnswer}
          onNext={handleNextQuestion}
          currentIndex={currentIndex}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
};

export default App;
