import React,{ Component } from 'react'
// import StackGrid , { transitions } from "react-stack-grid";
import './board.css'
// const { scaleDown } = transitions;

class BoardShow extends Component {
  render() {
    const details = this.props
    console.log(details)
    return (
      <ul>
        <img src={this.props.details.image} alt=""/>
        <h2>{this.props.details.name} </h2>
        <h6>{this.props.details.desc}</h6>
        <span>{this.props.details.tag}</span>
      </ul>

  )

  }
}
export default BoardShow
