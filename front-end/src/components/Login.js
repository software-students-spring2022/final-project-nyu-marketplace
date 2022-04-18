import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        console.log("access api endpoint to log in user")
        console.log(`${email} ${password}`)
    }

    const navigate = useNavigate(); 
    const routeChange = (path) =>{  
        navigate(path);
    }

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
                <Form onSubmit={login} id='form'>
                    <Form.Group id='email-form'>
                        <FloatingLabel label='email'>
                            <Form.Control id='email-input' type='email' placeholder='email' onChange={ e=> setEmail(e.target.value)}/>
                        </FloatingLabel>
                    </Form.Group>

                    <Form.Group id="password-form">
                            <FloatingLabel label="password">
                                <Form.Control id="password-input" type="password" placeholder="password"onChange={ e=> setPassword(e.target.value)}/>
                            </FloatingLabel>
                    </Form.Group>
                    <Button id="button" onClick={e => {
                       fetch('http://localhost:3000/login', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({email: email, password: password})
                        })
                        .then().catch();
                       navigate('/homepage');
                   }}>login</Button>
                    
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