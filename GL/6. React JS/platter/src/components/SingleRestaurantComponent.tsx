import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

type MyProps={
    id:number,
    name:string,
    description:string,
    image:string
}

class SingleRestaurantComponent extends Component<MyProps,{}>{

    constructor(props:MyProps){
        super(props);
    }

    render(){
        return(
            <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image} />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
          {this.props.description}
        </Card.Text>
          {/* `=tilde */}
        <Link to={`/single/`+ this.props.id} className="btn btn-success btn-sm">Read More</Link>
      </Card.Body>
    </Card>
            </>
        )
    }
}

export default SingleRestaurantComponent;