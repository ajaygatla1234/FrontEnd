import React, { Component } from "react";

class HomeComponent extends Component<{},{}>{
    render(){
        return(
            <>
                <h1>Platter</h1><hr />
                <p>Welcome to Platter. You can find restaurants in your locality and check their menus.</p>
                <p><strong>NOTE </strong> You can even add an item - this should really be an admin feature but is add is here to demostrate handling HTTP POST requests.</p>
            </>
        )
    }
}
export default HomeComponent;