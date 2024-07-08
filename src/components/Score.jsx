const Score = ({ score, totalQuestions }) => (
  <div className="score">
    <h2>Your Score</h2>
    <p>
      {score} out of {totalQuestions}
    </p>
  </div>
);

export default Score;
