import React, { Component } from "react";

class Teacher extends Component{
    render(){
        return(
            <div>
                <b>Name : {this.props.name}</b>
                <br></br>
                <b>Gender : {this.props.gender}</b>
                <br></br>
                <b>Experience : {this.props.exp}</b>
            </div>
        )
    }
}

export default Teacher;