import "./detail.css"
import {Header, SearchBar} from "./index"
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const clickOrder = () => {
    alert("Success!")
}

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

const DetailPage = (props) => {

    const [result, setResult] = useState()
    const query = useQuery()

    useEffect(() => {
        fetch(`http://localhost:3000/detail?${query.toString()}`)
        .then(res => res.json())
        .then((resJson) => {
            setResult(resJson);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    return(
        <>
            <Header/>
            <center>
                {result === undefined ? <Spinner/>:<Item data={result}/>}
                <Container>
                    <Row>
                        <Col><Link to = "/homepage"><Button onClick={clickOrder}>Order</Button></Link></Col>
                        <Col><Link to = "/homepage"><Button onClick={clickOrder}>Favorite</Button></Link></Col>
                    </Row>
                </Container>
            </center>
        </>
    )
}

export default DetailPage