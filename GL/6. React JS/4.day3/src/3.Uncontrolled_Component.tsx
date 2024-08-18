import React, { useRef } from "react";

function UncontrolledComponent(){

    var email=useRef<HTMLInputElement>(null);
    var username=useRef<HTMLInputElement>(null);

    const mySubmit=(event: React.FormEvent) => {

        if(email.current!=null){
            alert("Email: "+email.current.value);
        } 

        if(username.current!=null){
            alert("Username: "+username.current.value);
        } 
    }

    return(
        <div>
            <h1>Example for Uncontrolled Component</h1>
            <form onSubmit={mySubmit}>
                <input type="text" placeholder="Username" ref={username}></input>
                <br></br>
                <input type="email" placeholder="Email" ref={email}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UncontrolledComponent;