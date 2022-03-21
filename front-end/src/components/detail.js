import "./detail.css"
import {Header, SearchBar} from "./index"
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const clickOrder = () => {
    alert("Success!")
}

const DetailPage = (props) => {
    
    const itemsArray = [
        {
            title: "Agouti",
            price: "64.90",
            description: "Cross-group tertiary application",
            location: "New York",
            category: "Clothing",
        },
        {
            title: "Four-striped grass mouse",
            price: "160.47",
            description: "Re-contextualized high-level function",
            location: "Shangai",
            category: "Academic",
        },
        {
            title: "Crocodile",
            price: "100",
            description: "Customer-focused fault-tolerant process improvement",
            location: "Shangai",
            category: "Other",
        },
        {
            title: "Bison",
            price: "87.41",
            description: "Configurable contextually-based initiative",
            location: "Abu Dhabi",
            category: "Academic",
        },
        {
            title: "Lemur",
            price: "17",
            description: "Face to face content-based ability",
            location: "New York",
            category: "Clothing",
        },
        {
            title: "Tern",
            price: "499.99",
            description: "Open-architected zero tolerance alliance",
            location: "New York",
            category: "Dorm",
        }
    ]

    return (
        <>
            <Header logged="True"/>
            <Item 
                title = "Amazing Item"
                price = "10"
                description = "Amazing!"
                location = "New York"
                category = "Other"
                photo = "https://picsum.photos/200"/>
            <Container>
                <Row>
                    <Col><Link to = "/homepage"><Button onClick={clickOrder}>Order</Button></Link></Col>
                    <Col><Link to = "/homepage"><Button onClick={clickOrder}>Favorite</Button></Link></Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailPage