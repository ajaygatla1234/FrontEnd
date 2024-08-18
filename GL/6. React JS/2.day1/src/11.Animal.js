import React, { Component } from "react";

class Animal extends Component{
    constructor(props){
        super(props); //call the constructor in parent class//in our case it is component
        
        //state is an inbuilt object
        this.state={
            color:"Red",
            age:30
        }
    
    }

    render(){
        return(
            <div>
                Todays Message : {this.props.message};
                <br></br>
                Color: <b>{this.state.color}</b>
                <br></br>
                Age: <b>{this.state.age}</b>
            </div>
        )
    }
}

export default Animal;