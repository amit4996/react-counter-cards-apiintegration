import React from 'react'
import './style.css';

class Counter extends React.Component {
    constructor ()
    {
     super()
     this.state={
         count:0
     }
     this.Event=this.Event.bind(this)
     this.EventStart=this.EventStart.bind(this)
    }

    Event()
    {
     this.setState((prevState) => {
      return {
          count :prevState.count+1
              }
     })
    }

    EventStart(){
        this.setState((prevState)=>{
            return {
                count:0
            }
        })
    }

    render (){
     return (
         <div className="counter">
             <div><h1>{this.state.count}</h1></div>
             <div><button onClick={this.Event}>Click!</button> <button onClick={this.EventStart}>Reset</button></div>
         </div>
     )
    }
}
export default Counter