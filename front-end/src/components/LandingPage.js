//Import from dependencies
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

//Import styles
import './LandingPage.css'

import {Header} from './index'
import {Footer} from './index'

const LandingPage = () => {
  return (

  <Container fluid id='landingpage-container'>
    
    <Header/>

    <Row id='landingpage-one'>
      <Col className='slogan'>
        <div id='slogan-header' >Your Campus Marketplace</div>
        <div className='body-text'>Buy and Sell in a Community Exclusive to NYU Students</div>
        <Link to='/login'>
          <Button id='start-button'>Get Started</Button>
        </Link>
       </Col>
    </Row>

    <Row id="landingpage-two">
      <Col className='image' sm={6}>
        <img src = './1.png' alt = 'NYU Marketplace' height = {500}/>
      </Col>

      <Col sm={6} className='body'>
        <div className='header-text'>Find</div>
        <div className='body-text'>Browse through hundreds of items put for sale by other NYU students</div>
      </Col>
    </Row>

    <Row id="landingpage-three">
      <Col sm={6} className='body'>
        <div className='header-text'>Sell</div>
        <div className='body-text'>List your unwanted items easily and quickly</div>
      </Col>
      <Col sm={6} className='image'>
        <img src = './2.png' alt = 'NYU Marketplace' height = {500}/>
      </Col>
    </Row>

    <Row id="landingpage-four">
      <Col sm={6} className='image'>
        <img src = './3.png' alt = 'NYU Marketplace' height = {500}/>

      </Col>

      <Col sm={6} className='body'>
        <div className='header-text'>Connect</div>
        <div className='body-text'>Meet other students and build your community with each purchase</div>
      </Col>
    </Row>

    <Footer/>

  </Container>


  )
}

export default LandingPage