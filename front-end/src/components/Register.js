import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import './Register.css'
const Register = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate(); 
    
    return (
        <Container fluid id='register-container'>
            <Row>
                <Col id='register-header'>
                    <div>NYU Marketplace</div>
                </Col>
            </Row>

            <Row>
                <Col id='form-section' sm={6}>
                    <div id='title'>Register</div>
                    <Form id='form'>
                        <Form.Group id='first-name-form'>
                            <FloatingLabel label='full name'>
                                <Form.Control id='first-name-input' type='name' placeholder='full name' onChange={ e=> setName(e.target.value)}/>
                            </FloatingLabel>
                        </Form.Group>

                        <Form.Group id='last-name-form'>
                            <FloatingLabel label='username'>
                                <Form.Control id='last-name-input' type='name' placeholder='username' onChange={ e=> setUsername(e.target.value)}/>
                            </FloatingLabel>
                        </Form.Group>

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
                            fetch('http://localhost:3000/add-user', {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({name: name, username: username, email: email, password: password})
                            })
                            .then(res => res.json()).then(e => {
                                    alert(e.msg);
                                    if (e.status === '200'){ navigate('/login')}
                                }).catch(e => {alert(e.msg)});
                        }}>Register</Button>
                        
                    </Form>

                </Col>
            <Col id='img-section' sm={6}>
                <img src = './arch.png' alt = 'WSP' height = {700}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Register