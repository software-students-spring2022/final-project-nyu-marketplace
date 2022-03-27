import "./itemLine.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";

const ItemLine = (props) => {
    // Change key to id given by database, once that is integrated. (React likes unique keys)
    return (
        <>
            <center><Container className = "itemline">
                <Row className = "title">
                    <Col>Seller</Col>
                    <Col>Item</Col>
                    <Col>Post Time</Col>
                </Row>
                {props.data.map(element => 
                    <Row key={element.title}><Link to = "/detail">
                        <Col>{element.title}</Col>
                        {/* <Col>{element.item}</Col>
                        <Col>{element.time}</Col> */}
                    </Link></Row>
                )}
            </Container></center>
            
        </>
    )
}

export default ItemLine;