import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

class BS2Component extends Component<{},{}>{

    render(){
        return(
            <>
                <Row>
                    <Col md={3}>
                        <Card>
                            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"></Card.Img>
                            <Card.Body>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cum ab vitae modi consequatur aut nostrum quo maiores, cupiditate magni molestiae fugiat alias natus odit, minima odio commodi corporis quisquam?
                                </Card.Text>
                                <Button variant="primary">Go Somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        )
    }
}

export default BS2Component;