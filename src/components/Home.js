import React,{ Component } from 'react'
import Search from './Search'
import Create from './Create'
import Board from './Board'
import './home.css'


class Home extends Component {
  render(){
    return(
      <div>
        <div>
          <Search/>
        </div>
        <div>
          <Create/>
        </div>
        <Board/>
      </div>

    )
  }
}

export default Home
