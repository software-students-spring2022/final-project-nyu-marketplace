//Import from dependencies
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';

//Import styles
import './LandingPage.css'

const LandingPage = () => {
  return (

  <Container fluid id='container'>
    <Row>
      <Col sm={8} id='header'>
        <div>NYU Marketplace</div>
      </Col>
      <Col sm={10} id='header-2'>
        <Button id='login-button'>Log In</Button>
      </Col>
    </Row>

  </Container>


  )
}

export default LandingPage