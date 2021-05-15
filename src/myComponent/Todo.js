import React from 'react'

export const Todo = ({data,onDelete}) => {
    // console.log({data});
    return (
        <div className="mx-3">          
            
            <h4 className="my-1">{data.title}</h4>
            <p>{data.Desc}</p>
            <button className="btn btn-sm btn-danger " onClick={()=>{onDelete(data)}}>delete</button>
        </div>
    )
}
