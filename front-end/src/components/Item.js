import "./Item.css"

const Item = props => {

    console.log(`http://localhost:3000/images/${props.data[0].photo}`)

    return (
        <article className="Item">

            {/* random image from picsum, will be user-generated */}
            {/*<img className="Item-img" src="https://picsum.photos/200" alt="display image"/>*/}
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
            </div>
        </article>
    )
}

export default Item
