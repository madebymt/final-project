import React,{ Component } from 'react'
// import StackGrid , { transitions } from "react-stack-grid";
import Data from './data'
import './board.css'

// const { scaleDown } = transitions;

class Board extends Component {
  render() {
    return (
      <div className='board'>
        <img className='img' src='../img/1.jpg'/>
        <img className='img' src='../img/2.jpg'/>
        <img className='img' src='../img/3.jpg'/>
        <img className='img' src='../img/1.jpg'/>
        <img className='img' src='../img/2.jpg'/>
        <img className='img' src='../img/3.jpg'/>


      </div>
    );
  }
}
export default Board
