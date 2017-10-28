import React,{ Component } from 'react'


class Search extends Component {
  constructor(){
    super()
    this.state = {
      SearchText:"",
      Idea:[]
    }
  }
  handleSearchChange = e => {
    this.setState({searchText:this.searchInput.value})
    console.log(this.setState)
  }
  render(){
    return(
      <div className='container'>
       <input className='search-bar' type="text" placeholder="search your idea"
         ref={(input)=>{this.searchInput = input}}
         onChange={this.handleSearchChange}/>
       <button className='button'>Find</button>
      </div>

    )
  }
}

export default Search
