import "../styles/header.css";

export function Header({ score,bestScore }) {
  return (
    <>
      <header>
        <h1>Random Memory Game</h1>
        <p>
          <span>
            Score: <span className="score">{score}</span>
          </span>
          <span>
            Best score: <span className="bestScore">{bestScore}</span>
          </span>
        </p>
      </header>
      <p>Get points by clicking on an image once.</p>
    </>
  );
}
