import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './header'
import {useState} from 'react'

import './Homepage.css'

const Homepage = () => {
  const [search, setSearch] = useState();
  const doSearch = () => {
      console.log('send search to api endpoint')
  }  
  return (
      <Container fluid id='homepage-container'>
          <Header/>
          <Row>
            <Col id='search'>
                <div id='search-title'>Find your next item</div>
                <Form id='form'>
                    <FormControl id='searchbar' type='search' placeholder='Start Searching' aria-label='Search' onChange={ e=> setSearch(e.target.value)}/>
                </Form>
                <Button id='search-button' variant="outline-secondary">Search</Button>
                <div id='search-title'>Browse By Category</div>
            </Col>
          </Row>

          <Row>
            <Col id='categories'>
                <Link to='/academicsupplies'>
                    <Button id='category-button'>Academic Supplies</Button>
                </Link>
                
                <Link to='/dormappliances'>
                    <Button id='category-button'>Dorm Appliances</Button>
                </Link>
                
                <Link to='/clothing'>
                    <Button id='category-button'>Clothing</Button>
                </Link>

                <Link to='/other'>
                    <Button id='category-button'>Other</Button>
                </Link>
            </Col>
          </Row>
      </Container>
  
  )
}

export default Homepage