import './style.css';
import React from "react"

class Card extends React.Component{
    render(){
        return(
            <div className="card">
                <div><img src={this.props.DataCollection.images}></img></div>
                <div><h3>{this.props.DataCollection.review}</h3></div>
                <div><a href={this.props.DataCollection.link}>{this.props.DataCollection.link}</a></div>
            </div>)
    }
   
    
}

export default Card;
