import "./detail.css"
import {Header, SearchBar} from "./index"
import Item from './Item'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// const clickOrder = () => {
//     alert("Success!")
// }

// const OrderConfirmModal = (props) => {

    
//     return (

//     )
// }


const DetailPage = (props) => {
    const [show, setShow] = useState(false);

    const orderItem = () => {
        //Here would go the route to order the item
        console.log("Tasks:\nAdd item to user info in database\nRemove item from public view")
    }
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    const navigate = useNavigate(); 
    const routeChange = (path) =>{  
        navigate(path);
    }

    const [result, setResult] = useState()
    const query = useQuery()

    useEffect(() => {
        fetch(`http://localhost:3000/detail?${query.toString()}`, {credentials: 'include', headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
        .then(res => res.json())
        .then((resJson) => {
            if (resJson.err === 'visitor'){return navigate('/')}
            setResult(resJson);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    return(
        <>
            <Modal
                {...props}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show} 
                onHide={() => setShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <div id='modal-header-text'>Order Confirmation</div> 
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body id='modal-body-text'>
                    <div id='modal-body'>
                        <div>Hello, please review the following before reserving this item:<br/>
                            <br/>After reservation, you must contact the seller within 24 hours in order to set up a meeting time and place. Please
                            note that the meeting location must be within AN NYU FACILITY. 
                            <br/>After the item is exchanged, and the payment has been made, you must mark the order as completed -- which can be done
                            by accessing the item on your homepage. 
                        </div>
                        <Button id='modal-reserve-button' onClick={orderItem}>Reserve Item</Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Header/>
            <center>
                <SearchBar/>
                {result === undefined ? <Spinner/>:<Item data={result}/>}
                <Container>
                    <Row>
                        <Col><Button onClick={()=>setShow(true)}>Order</Button></Col>
                        <Col><Link to = "/homepage"><Button>Favorite</Button></Link></Col>
                    </Row>
                </Container>
            </center>
        </>
    )
}

export default DetailPage