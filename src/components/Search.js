import React,{ Component } from 'react'


class Search extends Component {
  render(){
    return(
      <div className='container'>
       <input className='search-bar' type="text" placeholder="search your idea"/>
       <button className='button'>Find</button>
      </div>

    )
  }
}

export default Search
