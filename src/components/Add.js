import React,{ Component } from 'react'

class Add extends Component {

createBoard=(e)=>{
  e.preventDefault()
  const addIdea = {
    title:this.title.value,
    desc:this.desc.value,
    file:this.file.value
  }
  this.addform.reset()

}

  render(){
    return(
      <div>
        <form
          ref={(input)=>this.addform = input}
          onSubmit={(e)=>this.createBoard(e)}>
          <div className ='container'>
          <input type='text' placeholder='title'
            ref={(input)=>this.title = input}/>
          <br/>
          <textarea placeholder='description'
            ref={(input)=>this.desc = input}></textarea>
          <br/>
          <input type='file' placeholder ='upload'
            ref={(input)=>this.file = input}/>
          <br/>
          <button>submit</button>
          </div>
        </form>
      </div>

    )
  }
}

export default Add
