import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import {useEffect, useState} from 'react'
import axios from 'axios'

import HomePageItem from './HomePageItem'

import './Homepage.css'

const Homepage = () => {
  const [search, setSearch] = useState();
  const [info, setInfo] = useState();


  const navigate = useNavigate(); 
    const routeChange = (path) =>{  
        navigate(path);
    }

  useEffect(() => {
      axios.get('http://localhost:3000/reserved', {withCredentials:true, headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
        .then(res => {
            if (res.data.err === 'visitor'){return navigate('/')}
            else {setInfo(res.data)}
        })
        .catch(err => console.log("Error retrieving items",err))
    }, []);

    const renderActivePurchases = () => {
        if (info === undefined) {
            return <div>Loading...</div>
        }
        else {

            return info.map(item => {
                return (

                    <div>
                        {/* <Modal
                            keyboard={false}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={show} 
                            onHide={() => setShow(false)}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="contained-modal-title-vcenter">
                                    <div id='modal-header-text'>Complete Your Order</div> 
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body id='modal-body-text'>
                                <div id='modal-body'>
                                    <div>Hello, please carefully review the following:<br/>
                                        <br/>Here, you may mark an transaction as complete, or cancel the transaction.
                                        <br/>Mark the transaction as complete: Only if you have paid the seller for the item and the item has been exchanged to you.
                                        <br/>Mark the transaction as cancelled: If you or the seller no longer wish to complete the exchange. 
                                    </div>
                                    <Button onClick={completeOrder(item._id)} id='modal-reserve-button'>Mark Transaction as Complete</Button>
                                    <Button id='modal-reserve-button'>Cancel Transaction</Button>
                                </div>
                            </Modal.Body>
                        </Modal> */}
                        <HomePageItem title={item.title} id={item.poster}/>
                    </div>
                )
            })
        }
    }


    

  return (
      
      <Container fluid id='homepage-container'>

          <Header/>
          <Container fluid id='homepage-content'>
          <Row>
            <Col id='search'>
                <div id='search-title'>Find your next item</div>
                <Form id='form'>
                    <FormControl id='searchbar' type='search' placeholder='Start Searching' aria-label='Search' onChange={ e=> setSearch(e.target.value)}/>
                </Form>
                <Link to={`/result?searchText=${search}`}>
                  <Button id='search-button' variant="outline-secondary">Search</Button>
                </Link>
                <div id='browse'>Browse By Category</div>
            </Col>
          </Row>

          <Row>
            <Col id='categories'>
                <Link to='/result?category=Academic&searchText='>
                    <Button id='category-button'>Academic Supplies</Button>
                </Link>
                
                <Link to='/result?category=Dorm&searchText='>
                    <Button id='category-button'>Dorm Appliances</Button>
                </Link>
                
                <Link to='/result?category=Clothing&searchText='>
                    <Button id='category-button'>Clothing</Button>
                </Link>

                <Link to='/result?category=Other&searchText='>
                    <Button id='category-button'>Other</Button>
                </Link>
                
            </Col>
          </Row>

          <Row>
              <Col id='hp-header-random'>
                <div id='home-item-title'>Active Purchases</div>
              </Col>
          </Row>

          <Row>
              <Col id='active-items'>
                  <div id='all-active-items'>{renderActivePurchases()}</div>
              </Col>
          </Row>
          </Container>
          <Footer/>
      </Container>
  
  )
}

export default Homepage