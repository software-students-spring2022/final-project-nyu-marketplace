import './footer.css';
import { Link, Navigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'

const Footer = (props) => {

    const [log, setLog] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/auth', {credentials: 'include', headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
        .then(res => res.json())
        .then((resText) => {
            setLog(resText.log);
        })
        .catch(err => {console.log(err)})
    }, [])

    if (log === 'True') { 
        return (
            <>
                <Row id="footer">
                    <Link to='/profile'>
                    <Button id='footer-login'>My Profile</Button>
                    </Link>
                </Row>
                <Row id="footer-logout">
                    <Link to='/login'>
                    <Button id='footer-login' onClick={e => {sessionStorage.removeItem('jwt')}}>Logout</Button>
                    </Link>
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Row id="footer">
                    <Link to='/login'>
                    <Button id='footer-login'>Login</Button>
                    </Link>
                </Row>
                <Row id="footer-lower">
                    <Col sm={2} className='footer-lower-text'>
                        <div id='footer-lower-text'>Dont' have an account? </div>
                    </Col>
                    <Col sm={1.5} className='footer-lower-button'>
                        <Link to='/register'>
                        <div id='footer-lower-register'>Register Here </div>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    }

}

export default Footer;