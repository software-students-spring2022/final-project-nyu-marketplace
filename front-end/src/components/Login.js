import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './login.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                <Form id='form'>
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
                    <Button id="button" onClick={async e => {
                       const res = await fetch('http://localhost:3000/auth/login', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({username: email, password: password})
                        })
                        if (res.status === 200) {const resJson = await res.json(); sessionStorage.setItem("jwt", JSON.parse(resJson).jwt);navigate('/homepage')}
                        else {alert("Failed to log in.")}
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