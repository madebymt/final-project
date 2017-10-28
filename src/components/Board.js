import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
// import StackGrid , { transitions } from "react-stack-grid";
import data from './data'
import './board.css'

// const { scaleDown } = transitions;

class Board extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.loadIdea}>Load Idea</button>

      <div className='board'>
        <img className='img' src='../img/1.jpg'/>
        <img className='img' src='../img/2.jpg'/>
        <img className='img' src='../img/3.jpg'/>
        </div>

      {data.map(idea =>{
        return(
          <div className='container board2' key={idea.id}>
          <Link className='board2' to={`/board/${idea.id}`} key={idea.id}>
            <div>
              <h3 className='showidea'>{idea.title}</h3>
              <img src={idea.thumbnailUrl} alt=""/>
            </div>
          </Link>
          </div>
        )
      } )}

    </div>
  )

  }
}
export default Board
