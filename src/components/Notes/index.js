import { Component } from "react";
import NotesItem from '../NotesItem'
import {v4 as uuidv4} from 'uuid'

import './index.css'
class Notes extends Component{
  state={notesObj:[],text:""}
  onInputChange=(e)=>{
   this.setState({text:e.target.value})
  }
  onSubmit=(e)=>{
    e.preventDefault()
    const {text}=this.state
    const obj={
      id:uuidv4(),
       value:text,
       date:new Date()

    }
   
   if(text.length>0){this.setState((prevState)=>({
      notesObj:[...prevState.notesObj,obj],text:""
    }))}
    
  }
  onDelete=(id)=>{
    const {notesObj}=this.state
   this.setState({notesObj:notesObj.filter((item)=>(
    item.id!=id
   ))})
  }
    render(){
      const {notesObj}=this.state
      console.log(notesObj)
        return(
          <div>
           <nav className="nav-item">
               <h1>Notes</h1>
           </nav>
           <div className="container">
            <form className="input-cont" onSubmit={this.onSubmit}>
              <input type="text" placeholder="take a note.." onChange={this.onInputChange}/>
            </form>
            <div className="note-items">

            {notesObj.map((item)=>(
              <NotesItem note={item} onDelete={this.onDelete}/>
            ))}
           </div>
           </div>
           

          </div>
        )
    }
}
export default Notes