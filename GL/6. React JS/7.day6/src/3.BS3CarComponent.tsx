import React, { Component } from "react";
import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";

type MyProps = {
    image : string,
    title : string,
    description : string

}
class BS3CarComponent extends Component<MyProps,{}>{

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
                            {this.props.description}
                        </Card.Text>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default BS3CarComponent;