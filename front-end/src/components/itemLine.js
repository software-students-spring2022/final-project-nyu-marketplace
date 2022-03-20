import "./itemLine.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const ItemLine = (props) => {
    return (
        <>
            <center><Container className = "itemline">
                <Row className = "title">
                    <Col>Seller</Col>
                    <Col>Item</Col>
                    <Col>Post Time</Col>
                </Row>
                <Row>
                    <Col>foo</Col>
                    <Col>Amazing Item</Col>
                    <Col>2012-04-23T18:25:43.511Z</Col>
                </Row>
            </Container></center>
            
        </>
    )
}

export default ItemLine;