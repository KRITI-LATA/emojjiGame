/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickEmojisList: [],
    isGameInProcess: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickEmojisList: [], isGameInProcess: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickEmojisList} = this.state
    const isWon = clickEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickEmojisList.length}
      />
    )
  }

  finishedGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isGameInProcess: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojisList} = this.state
    const isEmojiPresent = clickEmojisList.includes(id)
    const clickedEmojilength = clickEmojisList.length

    if (isEmojiPresent) {
      this.finishedGameAndSetTopScore(clickedEmojilength)
    } else {
      if (emojisList.length - 1 === clickedEmojilength) {
        this.finishedGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickEmojisList: [...previousState.clickEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    console.log(shuffledEmojisList)

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickEmojisList, isGameInProcess, topScore} = this.state
    return (
      <div className="emoji-container">
        <NavBar
          currentScore={clickEmojisList.length}
          isGameInProcess={isGameInProcess}
          topScore={topScore}
        />

        <div className="emoji-game-body">
          {isGameInProcess ? this.renderEmojiList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
