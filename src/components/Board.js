import React,{ Component } from 'react'
// import StackGrid , { transitions } from "react-stack-grid";
import Add from './Add'
import Media from './Media'

import './board.css'
// <Add addIdea = {this.props.addIdea}/>
// const { scaleDown } = transitions;

class Board extends Component {
  render() {
    return (
      <div className='container'>
        <Media/>
        <button className=''onClick={this.props.loadIdea}>Load Idea</button>

      </div>

  )

  }
}
export default Board
