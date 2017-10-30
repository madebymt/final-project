import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'

import Search from './Search'
import './layout.css'


class Layout extends Component {
  render(){
    return(
      <div className='big-header'>
      <header>
        <div className='header-section'>
        <img src="../img/idea.png" alt=""/>
        <NavLink className='nav' exact to ='/'>Home</NavLink>
        <NavLink className='nav' to ='/board'>Board</NavLink>
        <NavLink className='nav'to ='/Add'>Create</NavLink>
      </div>
        <Search/>
      </header>
      {this.props.children}
      </div>

    )
  }
}

export default Layout
