import React, { Component } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

type MyState = {
    count: number;
}

class BS1Component extends Component<{}, MyState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0  // Initialize count to 0
        }
    }

    sample = () => {
        alert("testing");
    }

    increment = () => {
        // alert("Increment is called");
        alert("Old Value : " + this.state.count);

        // updating the count
        // updating the state involves setState
        this.setState(
            (prevState) => (
                {
                    count: prevState.count + 1
                }
            )
        )
    }

    decrement = () => {
        // alert("Decrement is called");
        alert("Old Value : " + this.state.count);

        this.setState(
            (prevState) => (
                {
                    count: prevState.count - 1
                }
            )
        )
    }

    render() {
        return (
            <div>
                <h1>Bootstrap Component</h1>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Button variant="danger" onClick={this.decrement}>-</Button>
                        </Col>
                        <Col xs={12} md={4}>
                            <Alert variant="success">
                                Count: {this.state.count}
                            </Alert>
                        </Col>
                        <Col xs={12} md={4}>
                            <Button variant="success" onClick={this.increment}>+</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default BS1Component;
