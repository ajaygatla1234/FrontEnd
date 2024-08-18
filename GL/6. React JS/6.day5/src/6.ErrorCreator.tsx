import React, { Component } from "react";

declare function dummy(): void 

class ErrorCreator extends Component<{},{}>{
    render(){
        dummy();
        return(
            <>
                <h3>I am an error creating component</h3>
            </>
        )
    }
}

export default ErrorCreator;