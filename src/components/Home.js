import React,{ Component } from 'react'
import Create from './Create'
// import Add from './Add'
import Board from './Board'
import BoardShow from './BoardShow'
import data from './data'
import base from '../base'
import AudioRecorder from 'react-audio-recorder';

import './home.css'


class Home extends Component {
  constructor(){
    super()
    this.addIdea = this.addIdea.bind(this)
    this.loadIdea = this.loadIdea.bind(this)
    this.state ={
      ideas:{}
    }
  }

addIdea(createIdea){
  const ideas = {...this.state.ideas}
  const timestamp = Date.now()
  ideas[`ideas-${timestamp}`]= createIdea
  this.setState({ideas})
}

loadIdea(){
  this.setState({ideas:data})
}

  render(){
    return(
      <div>
        <div>
          <AudioRecorder />

        </div>

        <div>
          <Board
            addIdea={this.addIdea}
            loadIdea={this.loadIdea}/>
        </div>
        <ul>
          {
            Object
            .keys(this.state.ideas)
            .map(key => <BoardShow key={key}
              details = {this.state.ideas[key]}
              />)

          }

        </ul>
      </div>

    )
  }
}

export default Home
