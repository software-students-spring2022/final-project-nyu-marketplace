import React from 'react'
import Header from './header'
import "./ManageItems.css"
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ManageItems = () =>
{
    
    const [itemsArray, setItemsArray] = useState();

    const navigate = useNavigate(); 
    const routeChange = (path) =>{  
        navigate(path);
    }

   useEffect(() => {
    axios.get('http://localhost:3000/posted-items', {withCredentials:true, headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
      .then(res => {
          if (res.data.err === 'visitor'){return navigate('/')}
          setItemsArray(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  const handleClick = e => {
    alert("You clicked an item")
    console.log("You clicked an item")
  }

if (itemsArray === undefined)
{
    return <div>Loading...</div>
}

var componentArray = [];

for (let i = 0; i < itemsArray.length; i++)
{
   componentArray.push(<Item data={itemsArray.slice(i)} handleClick={handleClick}></Item>)
}

    return (
        <main className="ManageItems">
            <Header></Header>
            <h3>Seller Information</h3>
            <div className="SellerInfo">
                <p>Items Sold: 0</p>
                <p>Total Sale Value: $0</p>
                </div>
            <h3>Your Listings:</h3>
            {componentArray}
        </main>
    )
}

export default ManageItems
