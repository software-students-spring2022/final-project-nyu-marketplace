import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './header'
import {useState} from 'react'
import axios from 'axios'

import './Homepage.css'

const Homepage = () => {
  const [search, setSearch] = useState();
  const doSearch = () => {
    axios.get(`http://localhost:3000/search/?q=${search}`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}  

    const doAcademicSearch = () => {
      axios.get(`http://localhost:3000/search/?q=academic`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    const doClothingSearch = () => {
      axios.get(`http://localhost:3000/search/?q=clothing`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    const doDormSearch = () => {
      axios.get(`http://localhost:3000/search/?q=dorm`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    const doOtherSearch = () => {
      axios.get(`http://localhost:3000/search/?q=other`)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
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
                <Button id='search-button' variant="outline-secondary" onClick={doSearch}>Search</Button>
                <div id='search-title'>Browse By Category</div>
            </Col>
          </Row>

          <Row>
            <Col id='categories'>
                <Link to='/result'>
                    <Button id='category-button' onClick={doAcademicSearch}>Academic Supplies</Button>
                </Link>
                
                <Link to='/result'>
                    <Button id='category-button' onClick={doDormSearch}>Dorm Appliances</Button>
                </Link>
                
                <Link to='/result'>
                    <Button id='category-button' onClick={doClothingSearch}>Clothing</Button>
                </Link>

                <Link to='/reuslt'>
                    <Button id='category-button' onClick={doOtherSearch}>Other</Button>
                </Link>
            </Col>
          </Row>
      </Container>
  
  )
}

export default Homepage