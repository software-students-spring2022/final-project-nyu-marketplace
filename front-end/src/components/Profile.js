import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from './header';
import { useState, useEffect } from 'react';
import EditProfile from './EditProfile';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Profile.css'

const Profile = () => {

    const navigate = useNavigate(); 

    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState();
    const [avatar, setAvatar] = useState('http://localhost:3000/default.jpg')

    useEffect (() => { 
        fetch(`http://localhost:3000/auth`, {credentials: 'include', headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
        .then(res => {if(res.status === 401){return navigate('/')}else{return res.json()}})
        .then(resJson => {setName(resJson.username)})         
        .catch((err) => {
          console.log(err);
        });  
      }, [])

      useEffect(() => {
          fetch('http://localhost:3000/avatar', {credentials: 'include', headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
          .then(res => res.json())
          .then(resJson => {
              if (resJson.err === 'visitor'){
                  return navigate('/');
              } else {
                  setAvatar(resJson.avatar);
              }
          })
          .catch(err => console.log(err));
      }, [])

      useEffect(() => {
        fetch('http://localhost:3000/avatar', {
            credentials: 'include',
            headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`, 'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({avatar: avatar})
        })
        .then()
        .catch()
      }, [avatar])

    const editModeFalse = () => {
        setEditMode(false);
    };

    const pfpUpload = (event) => {
        console.log(event);
    }
    
  return (
        <Container fluid id='container'>
            <Header/>
            <Row className='profile-row'>
                <Col id='icon'>
                    <div id='pfp'>
                        <img className='pfpImage' type='file' src={avatar} alt="failed to load avatar"/>
                        <input id="pfpFile" type="file" onChange={e => {
                            const image = new FormData();
                            image.append('file', e.target.files[0]);
                            axios.post('http://localhost:3000/upload', image, {headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`, 'Content-Type': `multipart/form-data`}})
                            .then(res => {
                                setAvatar(`http://localhost:3000/${res.data.name}`);
                            })
                            .catch(err => {alert(err)});
                        }}></input>
                    </div>
                </Col>
                <Col id='user'>
                {editMode ? (
                    <div>
                        <EditProfile editModeFalse={editModeFalse}/>
                    </div>
                ) : (
                    <div>
                        <Row>
                            <p>{name}</p>
                        </Row>
                        <Row>
                            <Button id='edit-profile' onClick={() => setEditMode(true)}>Change Password</Button>
                        </Row>
                        <Link to='/'>
                            <Button id='edit-profile' onClick={e => {
                                sessionStorage.removeItem('jwt');
                            }}>Logout</Button>
                        </Link>
                    </div>
                )}
                </Col>
            </Row>
  
            <Row className='profile-row'>
                <p id='my-products'>My Products</p>
            </Row>
  
            <Row className='profile-row'>
                <Col id='product-btns'>
                    <Link to='/listings'>
                        <Button id='btn'>Listings</Button>
                    </Link>
                  
                    <Link to='/favorites?searchText='>
                        <Button id='btn'>Favorites</Button>
                    </Link>
                  
                    <Link to='/history'>
                        <Button id='btn'>History</Button>
                    </Link>
                </Col>
            </Row>
  
            <Row className='profile-row'>
                <Link to='/new-listing'>
                    <Button id='new-listing'>Create new listing</Button>
                </Link>
            </Row>
  
            <Row className='profile-row'>
                <p id='empty'></p>
            </Row>
      </Container>
  )
}

export default Profile