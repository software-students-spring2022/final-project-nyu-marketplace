import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './header'
import {useEffect, useState} from 'react'
import axios from 'axios'

import HomePageItem from './HomePageItem'

import './Homepage.css'

const Homepage = () => {
  const [search, setSearch] = useState();
  const [name, setName ] = useState("")
  const [info, setInfo] = useState();

  useEffect(() => {
      axios.get('http://localhost:3000/items', {withCredentials:true})
        .then(res => {
            setInfo(res.data)
            console.log("wtf is happening")
            console.log(info)
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
                    <Link to={`/detail?id=${item['_id']}`}>
                        <HomePageItem title={item.title}/>
                    </Link>
                )
            })
        }
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
              <Col id='active-items'>
                  <div id='home-item-title'>Recent Listings</div>
                  <div id='all-active-items'>{renderActivePurchases()}</div>
              </Col>
          </Row>
      </Container>
  
  )
}

export default Homepage