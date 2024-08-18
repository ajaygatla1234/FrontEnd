import React, { Component } from "react";

declare function dummy(): void 

class ErrorCreator1 extends Component<{},{}>{
    render(){
        dummy();
        return(
            <>
                <h3>I creating an Error</h3>
            </>
        )
    }
}

export default ErrorCreator1;