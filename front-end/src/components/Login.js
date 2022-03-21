import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './login.css'

const Login = () => {
  return (
      <Container fluid id='login-container'>
        <Row>
            <Col id='login-header'>
                <div>NYU Marketplace</div>
            </Col>
        </Row>

        <Row>
            <Col id='form-section' sm={6}>
                <div id='title'>Log in</div>
                <Form>
                    <Form.Group id='email-form'>
                        <FloatingLabel label='email'>
                            <Form.Control id='email-input' type='email' placeholder='email'/>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group id="password-form">
                            <FloatingLabel label="password">
                                <Form.Control id="password-input" type="password" placeholder="password" />
                            </FloatingLabel>
                    </Form.Group>
                    <Button id="button">login</Button>
                    
                </Form>
                <a href='/register'>No account? Register Here</a>

            </Col>
            <Col id='img-section' sm={6}>
                <img src = './arch.png' alt = 'WSP' height = {700}/>
            </Col>
        </Row>
      </Container>
  )
}

export default Login