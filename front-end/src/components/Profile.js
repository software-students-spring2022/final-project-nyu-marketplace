import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './header';
import { useState } from 'react';
import icon from '../icon.png';
import EditProfile from './EditProfile';

import './Profile.css'

const Profile = () => {
    const [editMode, setEditMode] = useState(false);

    const editModeFalse = () => {
        setEditMode(false);
    };
    
  return (
        <Container fluid id='container'>
            <Header/>
            <Row className='profile-row'>
                <Col id='icon'>
                    <img id='pfp' src={icon} alt="profile pic"/>
                </Col>
                <Col id='user'>
                {editMode ? (
                    <div>
                        <EditProfile editModeFalse={editModeFalse}/>
                    </div>
                ) : (
                    <div>
                        <Row>
                            <p>Username</p>
                        </Row>
                        <Row>
                            <Button id='edit-profile' onClick={() => setEditMode(true)}>Edit Profile</Button>
                        </Row>
                    </div>
                )}
                </Col>
            </Row>
  
            <Row className='profile-row'>
                <p id='my-products'>My Products</p>
            </Row>
  
            <Row className='profile-row'>
                <Col id='product-btns'>
                    <Link to='/listings'>
                        <Button id='btn'>Listings</Button>
                    </Link>
                  
                    <Link to='/favorites?searchText='>
                        <Button id='btn'>Favorites</Button>
                    </Link>
                  
                    <Link to='/history'>
                        <Button id='btn'>History</Button>
                    </Link>
                </Col>
            </Row>
  
            <Row className='profile-row'>
                <Link to='/new-listing'>
                    <Button id='new-listing'>Create new listing</Button>
                </Link>
            </Row>
  
            <Row className='profile-row'>
                <p id='empty'></p>
            </Row>
      </Container>
  )
}

export default Profile