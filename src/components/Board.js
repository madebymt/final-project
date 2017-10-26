import React,{ Component } from 'react'
import StackGrid , { transitions } from "react-stack-grid";
const { scaleDown } = transitions;

class Board extends Component {
  render() {
    return (
      <StackGrid
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}>
        <img src='../img/1.jpg'/>
        <img src='../img/2.jpg'/>
        <img src='../img/3.jpg'/>
      </StackGrid>
    );
  }
}
export default Board
