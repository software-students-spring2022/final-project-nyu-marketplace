import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import './Register.css'
const Register = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = () => {
        console.log("access api endpoint, register user");
        //console.log(`${firstName} ${lastName} ${email} ${password}`)
    }
    
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
                    <Form onSubmit={register} id='form'>
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
                        <Link to = "/login"><Button id="button">Register</Button></Link>
                        
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