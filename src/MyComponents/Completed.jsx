import React from 'react'

import './Completed.css'
export default function CompletedTasks({comptodo,onDeleteComp}) {

    return (
            <div className="comp-card">
                <span style={{marginBottom:'10px',fontWeight:"500",fontSize:"20px"}}>{comptodo.title}</span>
                <span style={{marginBottom:'10px',}}><h6 style={{margin:"0"}}>Completed at:</h6><span>{comptodo.time}</span></span>
                <button style={{backgroundColor:"rgb(205, 117, 205)",border:"1px solid purple",borderRadius:"5px"}} onClick={()=>{onDeleteComp(comptodo)}}>Delete</button>
            </div>
    )
}
