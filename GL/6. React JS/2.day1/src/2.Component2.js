import React from "react";

function Component2(){
    //return
        // <h3>I am Component2 - first element</h3>
        // <h3>I am Component2 - second element</h3> error 
        // because one component can return only one element
        // to avoid that we use div

        return(
        <div>
            <h3>I am Component2 - first element</h3>
            <h3>I am Component2 - second element</h3>
        </div>
        )

}

export default Component2;