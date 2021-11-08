 import React, { useEffect, useState } from 'react'
import './api.css'

const Api=()=>{
  const [state,setstate] =useState([])

  const getData=async ()=>{
   const response=await fetch("https://jsonplaceholder.typicode.com/comments")
   setstate(await response.json())
  }

  useEffect(()=>{
    getData();
  },[])

 return(
   <div className="cardcontainer">

   {state.map((e)=>{
     if(e.id<=12)
     {
      return(
        <div className="apicard">
          <h2>USER ID : {e.id}</h2>
          <h3>NAME : {e.name}</h3>
          <h3>EMAIL : {e.email}</h3>
          <p>BODY : {e.body}</p>
          </div>
      )
     }
   })}
   </div>
 )
}

export default Api