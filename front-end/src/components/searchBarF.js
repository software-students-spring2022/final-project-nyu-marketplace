import "./searchBar.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SearchBarF = (props) => {
    return (
        <>
            <Container fluid><form method = "get" action = "/favorites">
                <center><Row>
                    <Col><input type = "radio" name = "category" value = "Academic" /> Academic Supplies</Col>
                    <Col><input type = "radio" name = "category" value = "Dorm" /> Dorm Appliances</Col>
                    <Col><input type = "radio" name = "category" value = "Clothing" /> Clorhing</Col>
                    <Col><input type = "radio" name = "category" value = "Other"/> Other</Col>
                </Row></center>
                <center><Row>
                    <Col xs = {1}></Col>
                    <Col><input type = "text" name = "searchText"/></Col>
                    <Col xs = {1}><input type = "submit" value = "Search" /></Col>
                    <Col xs = {1}></Col>
                </Row></center>
            </form></Container>
        </>
    )
}

export default SearchBarF;