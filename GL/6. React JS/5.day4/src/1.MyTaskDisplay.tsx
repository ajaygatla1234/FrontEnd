import React, { Component } from "react";

//object
type refTask={
    title:string,
    description:string,
    priority:number
};

class MyTaskDisplay extends Component<refTask,{}>{
    constructor(props:refTask){
        super(props);
    }

    render(): React.ReactNode {
        return(
            <div>
                Title:{this.props.title}<br></br>
                Desc:{this.props.description}<br></br>
                Priority:{this.props.priority}<br></br>
                
            </div>
            
        )
    }
}

export default MyTaskDisplay;