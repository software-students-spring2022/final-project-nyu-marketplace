import './header.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Header = (props) => {

    const navigate = useNavigate();
    const clickLogo = (e) => {
        navigate('../homepage');
    } 

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
                <Row id="header-row">
                    <Col sm={1} id='header'>
                        <img onClick={clickLogo}  src='./NYU_Marketplace_Logo.png' alt = 'NYU Marketplace'/>
                    </Col>
                    <Col sm={1} id='header'>
                        <Link to='/homepage'>
                        <Button id='header-navbutton'>Home</Button>
                        </Link>
                    </Col>
                    <Col sm={1} id='header'>
                        <Link to='/about'>
                        <Button id='header-navbutton'>About</Button>
                        </Link>
                    </Col>
                    <Col sm={1} id='header'>
                        <Link to='/profile'>
                        <Button id='header-navbutton'>Profile</Button>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Row id="header-row">
                    <Col sm={1} id='header'>
                        <img onClick={clickLogo} src = './NYU_Marketplace_Logo.png' alt = 'NYU Marketplace'/>
                    </Col>
                    <Col sm={1} id='header'>
                        <Link to='/homepage'>
                        <Button id='header-navbutton'>Home</Button>
                        </Link>
                    </Col>
                    <Col sm={1} id='header'>
                        <Link to='/about'>
                        <Button id='header-navbutton'>About</Button>
                        </Link>
                    </Col>
                    <Col sm={1} id='header'>
                        <Link to='/login'>
                        <Button id='header-navbutton'>Log In</Button>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    }

}

export default Header;