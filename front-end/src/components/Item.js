import "./Item.css"

const Item = props => {
    return (
        <article className="Item">

            {/* random image from picsum, will be user-generated */}
            {/*<img className="Item-img" src="https://picsum.photos/200" alt="display image"/>*/}
            <div className="Item-Details">
                <img className="Item-img" src={props.photo} alt="display image"/>
                <h3>{props.title}</h3>
                <p><strong>Price</strong></p>
                <p>${props.price}</p>
                <p><strong>Description</strong></p>
                <p>{props.description}</p>
                <p><strong>Location</strong></p>
                <p>{props.location}</p>
                <p><strong>Category</strong></p>
                <p>{props.category}</p>
            </div>
        </article>
    )
}

export default Item
