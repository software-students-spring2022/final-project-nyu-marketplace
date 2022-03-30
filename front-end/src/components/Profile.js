import { Container, Row, Col, Form, FormControl, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './header'
import {useState} from 'react'
import icon from '../icon.png'

import './Profile.css'

const Profile = () => {
  const [search, setSearch] = useState();
  const doSearch = () => {
      console.log('send search to api endpoint')
  }  

  return (
      <Container fluid id='container'>
         <Header/>

          <Row class='profile-row'>
            <Col id='icon'>
                <img id='pfp' src={icon}/>
            </Col>
            <Col id='user'>
                <Row>
                    <p>Username</p>
                </Row>
                <Row>
                    <Button id='edit-profile'>Edit Profile</Button>
                </Row>
            </Col>
          </Row>

          <Row class='profile-row'>
              <p id='my-products'>My Products</p>
          </Row>

          <Row class='profile-row'>
              <Col id='product-btns'>
                  <Link to='/listings'>
                      <Button id='btn'>Listings</Button>
                  </Link>
                
                  <Link to='/result?favorites=True'>
                      <Button id='btn'>Favorites</Button>
                  </Link>
                
                  <Link to='/history'>
                      <Button id='btn'>History</Button>
                  </Link>
              </Col>
          </Row>

          <Row class='profile-row'>
              <Link to='/new-listing'>
                  <Button id='new-listing'>Create new listing</Button>
              </Link>
          </Row>

          <Row class='profile-row'>
              <p id='empty'></p>
          </Row>
      </Container>
  )
}

export default Profile