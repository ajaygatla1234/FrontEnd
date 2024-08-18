import { Component } from "react"
import BS4CarComponent from "./4.BS4CarComponent"
import { Col, Row } from "react-bootstrap"

class BS4CarList extends Component<{},{}>{

    render(){

        return(
            <>
                <Row>
                    <Col md={4}>
                        <BS4CarComponent image="https://imgd.aeplcdn.com/370x208/n/cw/ec/132427/taisor-exterior-right-front-three-quarter-2.png?isig=0&q=80" title="Toyota Urban Cruiser Taisor" price="Rs. 7.74 Lakh" address="On-Road Price, Tiruchirapalli"></BS4CarComponent>
                    </Col>

                    <Col md={4}>
                        <BS4CarComponent image="https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" title="Maruti Fronx" price="Rs. 7.51 Lakh" address="On-Road Price, Tiruchirapalli"></BS4CarComponent>
                    </Col>

                    <Col md={4}>
                        <BS4CarComponent image="https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80" title="Mahindra Scorpio N" price="Rs. 13.60 Lakh" address="On-Road Price, Tiruchirapalli"></BS4CarComponent>
                    </Col>
                </Row>
            </>
        )
        
        

}
}

export default BS4CarList;
