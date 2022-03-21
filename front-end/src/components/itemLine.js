import "./itemLine.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";

const ItemLine = (props) => {
    const fakeData = [
        {
            seller:"foo",
            item: "Amazing Item",
            time: "2012-04-23T18:25:43.511Z"
        },
        {
            seller:"bar",
            item: "Cool Item",
            time: "2012-05-23T18:32:54.242Z"
        }
    ]
    return (
        <>
            <center><Container className = "itemline">
                <Row className = "title">
                    <Col>Seller</Col>
                    <Col>Item</Col>
                    <Col>Post Time</Col>
                </Row>
                {fakeData.map(element => 
                    <Row><Link to = "/detail">
                        <Col>{element.seller}</Col>
                        <Col>{element.item}</Col>
                        <Col>{element.time}</Col>
                    </Link></Row>
                )}
            </Container></center>
            
        </>
    )
}

export default ItemLine;