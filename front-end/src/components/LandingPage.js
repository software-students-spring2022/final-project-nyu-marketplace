//Import from dependencies
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

//Import styles
import './LandingPage.css'

import {Header} from './index'

const LandingPage = () => {
  return (

  <Container fluid id='landingpage-container'>
    {/*<Row>
      <Col sm={9} id='header'>
        <div>NYU Marketplace</div>
      </Col>
      <Col sm={3} id='header-2'>
        <Link to='/login'>
          <Button id='login-button'>Log In</Button>
        </Link>
      </Col>
  </Row>*/}
    <Header/>

    <Row>
      <Col className='slogan'>
        <div id='slogan-header' >Your Campus Marketplace</div>
        <div className='body-text'>Buy and Sell in a Community Exclusive to NYU Students</div>
        <Link to='/login'>
          <Button id='start-button'>Get Started</Button>
        </Link>
       </Col>
    </Row>

    <Row>
      <Col classname='image' sm={6}>
        <img src = './1.png' alt = 'NYU Marketplace' height = {500}/>
      </Col>

      <Col sm={6} className='body'>
        <div className='header-text'>Find</div>
        <div className='body-text'>Browse through hundreds of items put for sale by other NYU students</div>
      </Col>
    </Row>

    <Row>
      <Col sm={6} className='body'>
        <div className='header-text'>Sell</div>
        <div className='body-text'>List your unwanted items easily and quickly</div>
      </Col>
      <Col sm={6} classname='image'>
        <img src = './2.png' alt = 'NYU Marketplace' height = {500}/>
      </Col>
    </Row>

    <Row>
      <Col sm={6} classname='image'>
        <img src = './3.png' alt = 'NYU Marketplace' height = {500}/>

      </Col>

      <Col sm={6} className='body'>
        <div className='header-text'>Connect</div>
        <div className='body-text'>Meet other students and build your community with each purchase</div>
      </Col>
    </Row>
  </Container>


  )
}

export default LandingPage