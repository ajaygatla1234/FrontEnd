import React from "react";

function Car(props:any){ 
    return(
        <div>
            Company : {props.company}
            <br></br>
            Model : {props.model}
        </div>
    )
}

export default Car;