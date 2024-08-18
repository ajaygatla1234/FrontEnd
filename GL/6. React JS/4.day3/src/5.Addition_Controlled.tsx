import React from "react";
import { useState } from "react";

function Addition(){

    const[a,setA]=useState("");
    const[b,setB]=useState("");

    function mySubmit(){
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        alert("Adding a & b : "+(numA+numB));
    }

    return(
        <div>
            <h1>Addition of Two Numbers</h1>
            <form onSubmit={mySubmit}>
                <input type="number" value={a} onChange={(e)=>setA(e.target.value)}></input>
                <br></br>
                <input type="number" value={b} onChange={(e)=>setB(e.target.value)}></input>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Addition;
