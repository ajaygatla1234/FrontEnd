import React, { Component } from "react";

type Props={
    name:string,
    age:number,
    gender:string
    image:string
}

type State={

}

class AnimalComponent extends Component<Props,State>{

    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <div>
                <h4>{this.props.name} animal component</h4>
                <img className="animal-image" src={this.props.image}></img><br></br>
                Age : {this.props.age}<br></br>
                Gender : {this.props.gender}
                <hr></hr>
            </div>
        )
    }
}

export default AnimalComponent;