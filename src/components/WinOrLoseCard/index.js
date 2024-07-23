// Write your code here.
import './index.css'

const loseImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const winImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLevel = isWon ? 'Best Score' : 'Score'
  const imageUrl = isWon ? winImage : loseImage

  return (
    <div className="emoji-card-container">
      <div className="detail-score">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="score-text">{scoreLevel}</p>
        <p className="win-lose-score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="won-lose-image" alt="win or lose" src={imageUrl} />
      </div>
    </div>
  )
}

export default WinOrLoseCard
