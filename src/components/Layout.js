import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import './layout.css'


class Layout extends Component {
  render(){
    return(
      <div>
      <header>
        <div className='container'>
        <img src="../img/idea.png" alt=""/>
        <NavLink exact to ='/'>Home</NavLink>
        <NavLink to ='/board'>Board</NavLink>
        <NavLink to ='/Add'>Create</NavLink>
      </div>
      </header>
      {this.props.children}
      </div>

    )
  }
}

export default Layout
