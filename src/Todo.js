import React from 'react'
import './style.css'
import Todolist from './Todolist'
import Listdata from './Listdata'

function Todo(){
    const Listdatanew=Listdata.map((e)=>{
        return <Todolist data={e}/>
    })

  return(
      <div>
          {Listdatanew}
      </div>
  )
}
export default Todo