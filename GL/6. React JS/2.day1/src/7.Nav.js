import React, { Component } from "react";
import './HomePage.css'

class Nav extends Component{
    render(){
        return(
            <div className="nav">
                <center>
                <span>Home      </span>
                <span>About   </span>
                <span>Services   </span>
                <span>Contact   </span>
                </center>
            </div>
        )
    }
}

export default Nav;