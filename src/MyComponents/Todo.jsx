import React from 'react'

export default function Todo({todo, onDelete,onComplete}) {
  return (
   
      <div className="card" style={{"backgroundColor": "lightblue", "width": "200px","minHeight":"200px","margin":"25px", "position":"relative"}} >
    <div className="card-body">
      <h5 className="card-title">{todo.title}</h5>
      <h6 className="card-subtitle mb-2 " style={{color:"grey"}}>{todo.sno}</h6>
      <p className="card-subtitle mb-2 " style={{color:"grey", fontSize:"13px"}}>{todo.time}</p>
      <p className="card-text" style={{height:"fit-content",marginBottom:"60px"}}> {todo.desc}</p>
      <div style={{display:'flex'}}>
      
      <button className="btn btn-sm btn-danger" style={{
      "bottom": "10px", "margin":"60px 10px 10px 10px","position":"absolute"}} onClick={()=>{onDelete(todo)}}>Delete</button>
      <button style={{
      "bottom": "10px", "margin":"60px 10px 10px 80px","position":"absolute","backgroundColor":"green",border:"2px solid green", borderRadius:"5px"}}  onClick={()=>{onComplete()}}><i className="fa fa-check" style={{color:'white'}}></i></button>
      </div>
    </div>
  </div>
  
  
  )
}
