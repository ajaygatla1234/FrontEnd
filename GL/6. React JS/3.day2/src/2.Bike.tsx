import React, { Component } from "react";

//reference structure
type Props={
    mileage:number,
    color:string
}

//reference structure for state
type State = {
    gear: number,
    fuel: string
}

class Bike extends Component<Props, State>{

    constructor(props:Props){
        super(props);

        this.state={
            gear:5,
            fuel: "Petrol"
        }
    }

    render(){
        return(
            <div>
                Mileage: {this.props.mileage}
                <br></br>
                Color: {this.props.color}
                <br></br>
                Gear: {this.state.gear}
                <br></br>
                Fuel: {this.state.fuel}
            </div>
        )
    }
}

export default Bike;