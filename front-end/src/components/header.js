import './header.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = (props) => {

    const clickLogo = (e) => {
        alert("Direct to Home page.");
    }

    const clickAbout = (e) => {
        alert("Direct to About Us page.")
    }

    const clickProfile = (e) => {
        alert("Direct to Profile page.")
    }

    const clickLog = (e) => {
        alert("Direct to Log in / Register page.")
    }

    if (props.logged === 'True') { 
        return (
            <>
                <Row>
                    <Col sm={6} id='header'>
                        <div onClick={clickLogo}>NYU Marketplace</div>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/about'>
                        <Button id='login-button' onClick={clickAbout}>About</Button>
                        </Link>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/profile'>
                        <Button id='login-button' onClick={clickProfile}>Profile</Button>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    } else {
        return (
            <>
                <Row>
                    <Col sm={6} id='header'>
                        <div>NYU Marketplace</div>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/about'>
                        <Button id='login-button' onClick={clickAbout}>About</Button>
                        </Link>
                    </Col>
                    <Col sm={3} id='header-2'>
                        <Link to='/login'>
                        <Button id='login-button' onClick={clickLog}>Log In</Button>
                        </Link>
                    </Col>
                </Row>
            </>
        );
    }

}

export default Header;