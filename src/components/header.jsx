import "../styles/header.css"

export function Header() {
  return (
    <>
      <header>
        <h1>Random Memory Game</h1>
        <p>
          <span>
            Score <span className="score">0</span>
          </span>
          <span>
            Best score <span className="bestScore">0</span>
          </span>
        </p>
      </header>
      <p>Get points by clicking on an image once.</p>
    </>
  );
}
