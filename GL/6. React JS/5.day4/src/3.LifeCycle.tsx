import { count } from "console";
import React, { Component } from "react";

type myState={
    count:number
}

class LifCycle extends Component<{},myState>{

    constructor(props:{}){
        super(props);

        this.state={
            count:1
        }

    }

    changeCount=()=>{
        this.setState((prevState)=>({
            count:10
        }))
    }

    //1st phase of the life cycle
    componentDidMount():void{
        //indicator that the component is loading is rendering
        console.log("I am Rendering");
    }

    //2nd phase - change in the state
    componentDidUpdate(): void {
        console.log("Something Changed")
    }

    //3rd - unmounting the component - removing the component from the DOM
    componentWillUnmount(): void {
        console.log("Component removed/unwanted");
    }

    render(){
        return(
            <div>
                <h3>Life Cycle Component</h3>
                <button type="button" onClick={this.changeCount}>Click</button>

            </div>
        )
    }
}

export default LifCycle;