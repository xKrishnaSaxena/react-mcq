import { useState } from "react";

const Question = ({
  question,
  options,
  correctAnswer,
  onNext,
  currentIndex,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option === correctAnswer);
  };

  const handleNextClick = () => {
    onNext(isCorrect);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <div className="question">
      <h2>
        Question {currentIndex + 1} of {totalQuestions}
      </h2>
      <p>{question}</p>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={selectedOption === option ? "selected" : ""}
          >
            {option}
          </button>
        ))}
      </div>
      <button onClick={handleNextClick} disabled={selectedOption === null}>
        Next
      </button>
    </div>
  );
};

export default Question;
