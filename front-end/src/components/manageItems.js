import React from 'react'
import Header from './header'
import "./ManageItems.css"
import Item from './Item'
import 'bootstrap/dist/css/bootstrap.css';

const ManageItems = () =>
{
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
    
    return (
        <main className="ManageItems">
            <Header></Header>
            <h3>Seller Information</h3>
            <div className="SellerInfo">
                <p>Items Sold: 0</p>
                <p>Total Sale Value: $0</p>
                </div>
            <h3>Your Listings:</h3>
            <section class='ManageItems-Items'>
                {itemsArray.map((item, i, itemsArray) => (
                    <Item
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        location={item.location}
                        category={item.category}
                        photo = "https://picsum.photos/200"
                    />
                ))}
            </section>
        </main>
    )
}

export default ManageItems