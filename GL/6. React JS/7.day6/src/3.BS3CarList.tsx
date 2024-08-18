import { Component } from "react"
import BS3CarComponent from "./3.BS3CarComponent"
import { Col, Row } from "react-bootstrap"

class BS3CarList extends Component<{},{}>{

    render(){

        return(
            <>
                <Row>
                    <Col md={4}>
                        <BS3CarComponent image="https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.668xw:1.00xh;0.184xw,0&resize=640:*" title="Lambo" description="Some Random"></BS3CarComponent>
                    </Col>

                    <Col md={4}>
                        <BS3CarComponent image="https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg" title="Masseratti" description="Some Random"></BS3CarComponent>
                    </Col>

                    <Col md={4}>
                        <BS3CarComponent image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmH37Zzw95Uv2fqOvsCUSUuh9DTX3exldKXWgEYYoH5A&s" title="Ferrari" description="Some Random"></BS3CarComponent>
                    </Col>
                </Row>
            </>
        )
        
        

}
}

export default BS3CarList;
