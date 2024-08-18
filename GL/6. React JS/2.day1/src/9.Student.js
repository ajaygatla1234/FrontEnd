import React from "react";

//we have written this component only
function Student(props){
    return(
        <div>
            <b>Name : {props.name}</b>
            <br></br>
            <b>Age : {props.age}</b>
            <br></br>
            <b>Gender : {props.gender}</b>
            <br></br>
            <b>Un. No. : {props.unno}</b>
        </div>
    )
}

export default Student;