import React, { useState } from 'react';
// import AddTodoData from '../App';


export const AddTodo = (props) => {
    // props.todoList.map((e)=>{
        const [title, settitle] = useState("")
        const [Desc, setDesc] = useState("")
const submit =(e)=>{
    e.preventDefault();
    if(!title || !Desc){
        alert("Fill Data")
    }
    else{

      props.AddTodoData(title,Desc);
      settitle("")
      setDesc("")
    }
}
    return (
        
<form onSubmit={submit }>
    
  <div className=" container mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Add Todo </label>
    <input type="text" value={title} className=" mx-5 px-1" onChange={(e)=>{settitle(e.target.value)}}/><br/>
    <label htmlFor="exampleInputEmail1" className="form-label">Add Description</label>
    <input type="text" value={Desc} onChange={(e)=>{setDesc(e.target.value)}} className=" mx-1" />
    <button type="submit" className="btn btn-sm btn-success">Submit</button>

  </div>
  
</form>

)}