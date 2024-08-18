import React, { Component } from "react";
import { Button, Card, CardBody, CardImg, CardTitle } from "react-bootstrap";

type MyProps = {
    image : string,
    title : string,
    price : string,
    address:string

}
class BS4CarComponent extends Component<MyProps,{}>{

    constructor(props : MyProps){
        super(props);
    }
    render(){
        return(
            <>
                <Card>
                    <Card.Img variant="top" src={this.props.image}/>
                    <CardBody>
                        <Card.Title>
                            {this.props.title}
                        </Card.Title>
                        <Card.Text>
                            <strong>{this.props.price}</strong> onwards
                        </Card.Text>
                        <Card.Text>
                            {this.props.address}
                        </Card.Text>
                        <Button variant="outline-success">Show Price in my City</Button>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default BS4CarComponent;