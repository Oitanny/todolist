import React from 'react'
import Completed from './Completed.jsx'
export default function CompletedTasks(props) {
  console.log("this",props.comptodos)
  return (
    <div style={{backgroundColor:'#1a1a1a',height:'40%',width:'100%',overflowY: 'scroll',color:"white", marginTop:"50px",padding:"20px"}}>
    <h5 style={{textAlign:"center"}}>COMPLETED TASKS</h5>
    {props.comptodos.length == 0 ? "No Completed todos to display" :
            <div style={{ "display": "flex",flexDirection:"column",alignItems:"center",width:"100%",height:"100%"}}>
              {props.comptodos.map((todo) => {
                
                return (
                <Completed comptodo={todo} key={todo.sno} onDeleteComp={props.onDeleteComp}/>
                )

              })}
            </div>
          }
    
    </div>
  )
}

