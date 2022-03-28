import "./searchBar.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SearchBar = (props) => {
    return (
        <>
            <Container fluid><form method = "get" action = "/result">
                <center><Row>
                    <Col><input type = "checkbox" name = "academicSupplies" value = "True" /> Academic Supplies</Col>
                    <Col><input type = "checkbox" name = "dormAppliances" value = "True" /> Dorm Appliances</Col>
                    <Col><input type = "checkbox" name = "clothing" value = "True" /> Clorhing</Col>
                    <Col><input type = "checkbox" name = "other" value = "True"/> Other</Col>
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

export default SearchBar;