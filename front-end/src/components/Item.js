import "./Item.css"

const Item = props => {
    return (
        <article className="Item">
            <div className="Item-Details">
                <img className="Item-img" src={`${props.data.photo}`} alt="Item"/>
                <h3>{props.data.title}</h3>
                <p><strong>Price</strong></p>
                <p>{props.data.price}</p>
                <p><strong>Description</strong></p>
                <p>{props.data.description}</p>
                <p><strong>Location</strong></p>
                <p>{props.data.location}</p>
                <p><strong>Category</strong></p>
                <p>{props.data.category}</p>
                <p><strong>Contact Me</strong></p>
                <p>{props.data.contact}</p>
            </div>
        </article>
    )
}

export default Item
