import { count } from "console";
import React, { Component } from "react";

type Props={
    count:number
}

type State={
    count:number;
}

class Counter extends Component<Props,State>{

    constructor(props:Props){
        super(props);

        this.state={
            count:this.props.count
        }
    }

    increment = () => {
        // alert("Increment is called");
        alert("Old Value : "+this.state.count);

        //updating the count
        //updating the state involves setState
        this.setState(
            (prevState)=>(
                {
                    count:prevState.count+1
                }
            )
        )
    }

    decrement = () => {
        // alert("Decrement is called");
        alert("Old Value : "+this.state.count);

        this.setState(
            (prevState)=>(
                {
                    count:prevState.count-1
                }
            )
        )
    }

    render(){
        return(
            <div>
                <h4>Counter : {this.state.count}</h4>
                <button onClick={this.increment}>+ Add</button>
                <button onClick={this.decrement}>- Reduce</button>
            </div>
        )
    }
}

export default Counter;