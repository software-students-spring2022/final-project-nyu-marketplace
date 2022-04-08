import React from 'react'
import Header from './header'
import "./ManageItems.css"
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ManageItems = () =>
{
    /*
    const itemsArray = [
        {
            title: "Agouti",
            price: "64.90",
            description: "Cross-group tertiary application",
            location: "New York",
            category: "Clothing",
        },
        {
            title: "Four-striped grass mouse",
            price: "160.47",
            description: "Re-contextualized high-level function",
            location: "Shangai",
            category: "Academic",
        },
        {
            title: "Crocodile",
            price: "100",
            description: "Customer-focused fault-tolerant process improvement",
            location: "Shangai",
            category: "Other",
        },
        {
            title: "Bison",
            price: "87.41",
            description: "Configurable contextually-based initiative",
            location: "Abu Dhabi",
            category: "Academic",
        },
        {
            title: "Lemur",
            price: "17",
            description: "Face to face content-based ability",
            location: "New York",
            category: "Clothing",
        },
        {
            title: "Tern",
            price: "499.99",
            description: "Open-architected zero tolerance alliance",
            location: "New York",
            category: "Dorm",
        }
    ]
    */

   const [itemsArray, setItemsArray] = useState();
   //const [isLoading, setLoading] = useState(true);

   useEffect(() => {
    axios.get('http://localhost:3000/items', {withCredentials:true})
      .then(res => {
          setItemsArray(res.data)
      })
      .catch(err => console.log(err))
  }, []);

    if (itemsArray == undefined)
    {
        return <div>Loading...</div>
    }

    var componentArray = [];

    for (let i = 0; i < itemsArray.length; i++)
    {
        componentArray.push(<Item data={itemsArray.slice(i)}></Item>)
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
