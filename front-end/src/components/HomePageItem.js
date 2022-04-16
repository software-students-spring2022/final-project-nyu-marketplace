import { Container } from 'react-bootstrap'
import './HomePageItem.css'

const HomePageItem = (props) => {
  return (

    <Container id='hp-item-container'>
        <div id='hp-item-title'>{props.title}</div>
    </Container>

  )
}

export default HomePageItem