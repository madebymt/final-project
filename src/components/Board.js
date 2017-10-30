import React,{ Component } from 'react'
// import StackGrid , { transitions } from "react-stack-grid";
import Add from './Add'
import './board.css'

// const { scaleDown } = transitions;

class Board extends Component {
  render() {
    return (
      <div>
        <Add addIdea = {this.props.addIdea}/>
        <button onClick={this.props.loadIdea}>Load Idea</button>

      </div>

  )

  }
}
export default Board
