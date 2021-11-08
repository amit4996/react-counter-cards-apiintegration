import React from 'react';
import './style.css';

class Log extends React.Component{

    constructor(){
        super()
        this.state={
            isLoggedIn: false
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
     this.setState((prevState)=>{
         return {
             isLoggedIn : !prevState.isLoggedIn
         }
     })
    }

    render(){
        let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
        let contentText = this.state.isLoggedIn ? "You are logged in" : "You are logged out" 
        return(
            <div>
                <h2>{contentText}</h2>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}
export default Log