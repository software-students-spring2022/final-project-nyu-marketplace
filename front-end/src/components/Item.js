import "./Item.css"

const Item = props => {
    return (
        <article className="Item">
            <div className="Item-Details">
                <img className="Item-img" src={`${props.data[0].photo}`} alt="Item"/>
                <h3>{props.data[0].title}</h3>
                <p><strong>Price</strong></p>
                <p>${props.data[0].price}</p>
                <p><strong>Description</strong></p>
                <p>{props.data[0].description}</p>
                <p><strong>Location</strong></p>
                <p>{props.data[0].location}</p>
                <p><strong>Category</strong></p>
                <p>{props.data[0].category}</p>
                <p><strong>Contact Me</strong></p>
                <p>{props.data[0].contact}</p>
            </div>
        </article>
    )
}

export default Item
