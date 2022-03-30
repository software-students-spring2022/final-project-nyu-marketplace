import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './header'
import {useState} from 'react'
import axios from 'axios'

import './Homepage.css'

const Homepage = () => {
  const [search, setSearch] = useState();
  

  return (
      <Container fluid id='homepage-container'>
          <Header/>
          <Row>
            <Col id='search'>
                <div id='search-title'>Find your next item</div>
                <Form id='form'>
                    <FormControl id='searchbar' type='search' placeholder='Start Searching' aria-label='Search' onChange={ e=> setSearch(e.target.value)}/>
                </Form>
                <Link to={`/result?searchText=${search}`}>
                  <Button id='search-button' variant="outline-secondary">Search</Button>
                </Link>
                <div id='search-title'>Browse By Category</div>
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
      </Container>
  
  )
}

export default Homepage