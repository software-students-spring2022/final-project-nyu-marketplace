import React, { useEffect, useState } from "react";
import Header from './header'
import './SellerForm.css'
import 'react-dropdown/style.css'
//import { BrowserRouter as Router, Switch, Route, Redirect,} from "react-router-dom";

const SellerForm = () => {

    // state variables for new item
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState(null)
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = e => {
        e.preventDefault()

        // stuff to send new item to server to be added later

        console.log('Your item has been posted')
        alert("Your item has been posted")
    }

    return (
      <div>
        <Header></Header>
        
        <h3>Listing Details</h3>

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
            <label for ="description_field"></label>
            <input
                id="description field"
                type = "text"
                placeholder="Item Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
        </div>

        <div>
            <label for ="photo_field">Select Photo:</label>
            <input
                id="photo field"
                type = "file"
                value={photo}
                onChange={e => setPhoto(e.target.files)}
            />
        </div>

        <div>
            <label for ="location_field">Select Location</label>
                <select value = {location} onChange={e => setLocation(e.target.value)}>
                <option value="" disabled>Choose a Location</option>
                <option value = "New York">New York</option>
                <option value = "SHanghai">Shanghai</option>
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
          <input type="submit" value="Submit" />
        </div>

        </form>
      </div>
    )
  }

export default SellerForm