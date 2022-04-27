import { Container} from 'react-bootstrap'

import './HomePageItem.css'

const HistoryPageItem = (props) => {

  return (

    <Container id='hp-item-container'>
        <div id='hp-item-title'>{props.title}</div>
        <div>{props.poster}</div>
        <div>{props.price}</div>
    </Container>

  )
}

export default HistoryPageItem