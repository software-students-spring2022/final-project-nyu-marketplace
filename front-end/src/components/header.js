import './header.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'

const Header = (props) => {

    /* const clickLogo = (e) => {
        alert("Direct to Home page.");
    } */

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
                <Row>
                    <Col sm={3} id='header'>
                        <div>NYU Marketplace</div>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/homepage'>
                        <Button id='login-button'>Home Page</Button>
                        </Link>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/about'>
                        <Button id='login-button'>About</Button>
                        </Link>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/profile'>
                        <Button id='login-button'>Profile</Button>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Row>
                    <Col sm={3} id='header'>
                        <div>NYU Marketplace</div>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/homepage'>
                        <Button id='login-button'>Home Page</Button>
                        </Link>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/about'>
                        <Button id='login-button'>About</Button>
                        </Link>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/login'>
                        <Button id='login-button'>Log In</Button>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    }

}

export default Header;