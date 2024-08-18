import React from "react";
import { Component } from "react";
import './Style.css'

//Inheriting the component class from react to convert our class into a react component
class Component3 extends Component{
        render(){
            return(
                <div>
                    <h2 className="blue-text">I am from class based component</h2>
                </div>
            )
        }
}

export default Component3;