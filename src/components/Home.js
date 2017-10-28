import React,{ Component } from 'react'
import Create from './Create'
import Add from './Add'
import Board from './Board'
import data from './data'
import './home.css'


class Home extends Component {
  constructor(){
    super()
    this.addIdea = this.addIdea.bind(this)
    this.loadIdea = this.loadIdea.bind(this)
    this.state ={
      ideas:[]
    }
  }

addIdea(createIdea){
  const ideas = {...this.state.ideas}
  const timestamp = Date.now()
  ideas[`ideas-${timestamp}`]= createIdea
  this.setState({ideas:ideas})
}

loadIdea(){
  this.setState({idea:data})
}
  render(){
    return(
      <div>
        <div>
        <Create/>
        </div>
        <div>
          <Add
            addIdea={this.addIdea}/>
        </div>
        <Board
          loadIdea={this.loadIdea}/>
      </div>

    )
  }
}

export default Home
