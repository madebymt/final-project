import React,{ Component } from 'react'
import './create.css'


class Create extends Component {

  render(){

    return(
      <div className='container'>
      <img onClick='makeRecord' className='mic' src="../img/mic.png" alt="record"/>
      </div>

    )
  }
}

export default Create
