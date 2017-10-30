import React,{ Component } from 'react'
import './add.css'

class Add extends Component {

createBoard(e){
  e.preventDefault()
  console.log('add')
  const createIdea = {
    name:this.name.value,
    desc:this.desc.value,
    file:this.file.value,
    tag:this.tag.value
  }
  console.log(createIdea)
  this.props.addIdea(createIdea)
  this.addform.reset()

}

  render(){
    return(
      <div className='container'>
        <form
          ref={(input)=>this.addform = input}
          onSubmit={(e)=>this.createBoard(e)}>
          <div className ='form-group'>
          <input className='form-control' type='text' placeholder='name'
            ref={(input)=>this.name = input}/>
        </div>
        <div className ='form-group'>
          <textarea className='form-control' placeholder='description'
            ref={(input)=>this.desc= input}></textarea>
          </div>
          <div className ='form-group'>
          <input className='form-control' type='tag' placeholder ='Tag'
            ref={(input)=>this.tag = input}/>
          </div>
          <div className ='form-group'>
          <input className='form-control'type='file' placeholder ='Upload'
            ref={(input)=>this.file = input}/>
          </div>
          <div className ='form-group'>
          <button className="btn btn-primary">submit</button>
          </div>
        </form>
      </div>

    )
  }
}

export default Add
