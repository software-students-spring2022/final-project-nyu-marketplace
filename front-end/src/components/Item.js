import "./Item.css"
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Item = props => {
    
    const renderEditButton = () => {
        if (props.edit === true) {
            return <Link to={`/edit-listing?id=${props.data['_id']}`}>
                        <Button className='edit-item' onClick={e => {
            }}>Edit Item</Button>
        </Link>
        }
    }

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
                <div>{renderEditButton()}</div>
            </div>
        </article>
    )
}

export default Item
