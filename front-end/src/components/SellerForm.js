import React, { useState } from "react";
import Header from './header'
import axios from "axios"
import './SellerForm.css'
import 'react-dropdown/style.css'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col"
import { Button } from 'react-bootstrap';
//import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SellerForm = () => {

    const [show, setShow] = useState(false);

    // state variables for new item
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState(null)
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("")

    const navigate = useNavigate(); 
    const routeChange = (path) =>{  
        navigate(path);
    }

    const handleSubmit = async e => {
        e.preventDefault()

        let poster;

        setShow(true);

        const idResult = await fetch('http://localhost:3000/auth', {headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
        const jsoned = await idResult.json()
        poster = jsoned.id

        // stuff to send new item to server to be added later
        axios.post("http://localhost:3000/new-listing/save", {
            title: title,
            price: price,
            description: description,
            photo: photo,
            location: location,
            category: category,
            item_status: "Available",
            posted_by: poster
      }, {headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
      .then(res => {if (res.data.err === 'visitor'){return navigate('/')}else{navigate('/homepage')}})
      .catch((err) => {
        alert(err);
      })
    }

    return (
      <div className= "background">
        <Header></Header>
        <h3 className= "h3">Listing Details</h3>

        <form onSubmit={handleSubmit}>
        <div className = "form-box">
            <label for="title_field"></label>
            <input
                id="title field"
                type ="text"
                placeholder="Item Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </div>

        <div>
            <label for ="price_field"></label>
            <input
                id="price field"
                type = "text"
                placeholder="Set Price ($)"
                value={price}
                onChange={e => setPrice(e.target.value)}
            />
        </div>

        <div>
            <label for ="description_field"></label>
            <textarea className="description"
                id="description field"
                type = "text"
                placeholder="Item Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
        </div>

        <div>
            <label for ="photo_field">Select Photo: </label>
            <input
                id="photo field"
                type = "file"
                onChange={e => {
                    const image = new FormData();
                    image.append('file', e.target.files[0]);
                    axios.post('http://localhost:3000/upload', image, {headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`, 'Content-Type': `multipart/form-data`}})
                    .then(res => {setPhoto(`http://localhost:3000/${res.data.name}`)}).catch();
                }}
            />
        </div>

        <div>
            <label for ="location_field">Select Location</label>
                <select value = {location} onChange={e => setLocation(e.target.value)}>
                <option value="" disabled>Choose a Location</option>
                <option value = "New York">New York</option>
                <option value = "Shanghai">Shanghai</option>
                <option value = "Abu Dhabi">Abu Dhabi</option>
            </select>
        </div>

        <div>
        <label for="category_field">Select Category</label>
        <select value = {category} onChange={e => setCategory(e.target.value)}>
                <option value="" disabled>Choose a Category</option>
                <option value = "Academic">Academic</option>
                <option value = "Clothing">Clothing</option>
                <option value = "Dorm">Dorm</option>
                <option value = "Other">Other</option>
            </select>
        </div>

        <div>
          <input className = "input" type="submit" value="Submit" />
        </div>

        </form>

        <Modal
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} 
            onHide={() => setShow(false)}>
            
            <Modal.Body id='modal-body-text'>
                    <div id='modal-body'>
                        <div>Your item has been listed.<br/>
                            <br/>Once a buyer is interested, they may reserve the item and contact you to organize the purchase. 
                            <br/>Press okay to return to the homepage.
                            <br/>
                        </div>
                        <Col><Link to = "/homepage"><Button>Okay</Button></Link></Col>
                    </div>
                </Modal.Body>
        </Modal>
      </div>
    )
  }

export default SellerForm
