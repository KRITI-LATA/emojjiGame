// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProcess} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            className="logo-img"
            alt="emoji logo"
          />
          <h1 className="emoji-text">Emoji Game</h1>
        </div>
        {isGameInProcess && (
          <div className="score-container">
            <p className="score-text">Score: {currentScore} </p>
            <p className="score-text">Top Score: {topScore} </p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
