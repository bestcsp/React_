
import {Todo} from "./Todo";
import React from 'react';

export const Todos = (props) => {
    // props.todoList.map((e)=>{
        let setcss={
            minHeight:"70vh",
        }
    return (
        <>
        <div>
            <>
            
                <div className="container my-3" style={setcss}>
                    <div className="text-center my-3">Todo List</div>
                    
                    {props.todoList.length===0?"No TODO To Display":props.todoList.map((Element)=>{
                        return (<Todo data={Element} key={Element.Sno} onDelete={props.onDelete}/>)
                    })}
                
            </div>
            {/* // } */}
            {/* ) */}
            
            {/* {props.todoList} */}
            </>
        </div>
        </>
    )
}
