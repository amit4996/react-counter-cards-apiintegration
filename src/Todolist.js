import React from 'react'
import './style.css'


function Todolist(props)
{
    return (
     <div>
         <input type="checkbox" checked={props.data.checked}></input>
         <h3>{props.data.todo}</h3>
     </div>
        
    )
}

export default Todolist