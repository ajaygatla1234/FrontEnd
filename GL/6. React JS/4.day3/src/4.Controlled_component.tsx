import React from "react";
import { useState } from "react";

function ControlledComponent(){

    //name = variable name
    //setName = setter function for updating the value
    const[name, setName]=useState("ajay");
    const[email, setEmail]=useState("ajay@gmail");

    function mySubmit(){
        alert("Name: "+name);
        alert("Email: "+email);
    }

    return(
        <div>
            <h1>Controlled Component</h1>
            <form onSubmit={mySubmit}>
                <input type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <br></br>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ControlledComponent;