import { count } from "console";
import React, {Component} from "react";

type Props={

}

type MyState={
    count:number
}

class EventComponent extends Component<Props,MyState>{

    constructor(props:Props){
        super(props);

        this.state={
            count:0
        }
    }

    buttonAction = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    render(){
        return(
            <div>
                <h2>Event Component</h2>
               <h3><b>{this.state.count}</b></h3>
                <button onClick={this.buttonAction}> Click Me  </button><span> (click will change the value)</span><br></br>
                <button onMouseOut={this.buttonAction}> Click Me </button><span> (Just hover will change the value)</span><br></br>
                <input type="text" onKeyDown={this.buttonAction}></input><span>(just pressing any button on keyboard will change the value)</span><br></br>
                <input type="text" onKeyUp={this.buttonAction}></input><span>(pressing any button on keyboard & after releasing it only, will change the value)</span>
            </div>
        )
    }

    
}

export default EventComponent;

