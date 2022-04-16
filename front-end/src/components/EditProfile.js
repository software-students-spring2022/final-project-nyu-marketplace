import { Container, Form, Button} from 'react-bootstrap'
import {useState} from 'react'

import './Profile.css'

const EditProfile = ({editModeFalse}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = () => {
      //function to submit changes to database, not yet implemented
      //add check to make sure password confirmation is correct
      console.log(firstName);
      console.log(lastName);
      console.log(confirm)
      editModeFalse();
  }

  return (
      <Container>
            <Form id='profile-edit-form'>
                <Form.Group class="profile-edit-option">
                    <Form.Label class='profile-edit-label'>First Name</Form.Label>
                    <Form.Control class='profile-edit-input' placeholder='Enter first name...' onChange={event => setFirstName(event.target.value)}/>
                </Form.Group>

                <Form.Group class="profile-edit-option">
                    <Form.Label class='profile-edit-label'>Last Name</Form.Label>
                    <Form.Control class='profile-edit-input' placeholder='Enter last name...' onChange={event => setLastName(event.target.value)}/>
                </Form.Group>

                <Form.Group class="profile-edit-option">
                    <Form.Label class='profile-edit-label'>Enter password</Form.Label>
                    <Form.Control class='profile-edit-input' type='password' placeholder='Confirm password to save changes...' onChange={event => setConfirm(event.target.value)}/>
                </Form.Group>

                <Button id="profile-save-changes" onClick={onSubmit}>Save Changes</Button>
            </Form>
      </Container>
  )
}

export default EditProfile