import React,{ Component } from 'react'
import './add.css'

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
      <div className='container'>
        <form
          ref={(input)=>this.addform = input}
          onSubmit={(e)=>this.createBoard(e)}>
          <div className ='form-group'>
          <input className='form-control' type='text' placeholder='title'
            ref={(input)=>this.title = input}/>
        </div>
        <div className ='form-group'>
          <textarea className='form-control' placeholder='description'
            ref={(input)=>this.desc = input}></textarea>
          </div>
          <div className ='form-group'>
          <input className='file'type='file' placeholder ='upload'
            ref={(input)=>this.file = input}/>
          </div>
          <div className ='form-group'>
          <button class="btn btn-primary">submit</button>
          </div>
        </form>

      </div>

    )
  }
}

export default Add
