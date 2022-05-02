import { Container, Form, Button} from 'react-bootstrap'
import {useState} from 'react'

import './Profile.css'

const EditProfile = ({editModeFalse}) => {
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = () => {
    //function to submit changes to database, not yet implemented
    //add check to make sure password confirmation is correct

    if (pwd === confirm){
        fetch('/update', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`
            },
            body: JSON.stringify({password: pwd})
        })
        .then(res => res.json())
        .then(resJson => {alert(resJson.msg);editModeFalse();setPwd("");setConfirm("");})
        .catch(err => {alert(err)})
    } else {
        alert("Two passwords don't match.");
        setPwd("");
        setConfirm("");
    }
  }

  return (
      <Container>
            <Form id='profile-edit-form'>

                <Form.Group className="profile-edit-option">
                    <Form.Label className='profile-edit-label'>Password</Form.Label>
                    <Form.Control className='profile-edit-input' type='password' placeholder='Enter new password...' value={pwd} onChange={event => setPwd(event.target.value)}/>
                </Form.Group>

                <Form.Group className="profile-edit-option">
                    <Form.Label className='profile-edit-label'>Re-enter password</Form.Label>
                    <Form.Control className='profile-edit-input' type='password' placeholder='Confirm your new password...' value={confirm} onChange={event => setConfirm(event.target.value)}/>
                </Form.Group>

                <Button id="profile-save-changes" onClick={onSubmit}>Save Changes</Button>
            </Form>
      </Container>
  )
}

export default EditProfile