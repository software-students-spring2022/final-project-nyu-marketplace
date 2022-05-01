import "./History.css";
import { Header } from "./index";
import { Footer } from "./index";
import HistoryPageItem from "./HistoryPageItem";

import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const History = () => {
    const [info, setInfo] = useState();

    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('/purchased', {withCredentials:true, headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
          .then(res => {
              if (res.data.err === 'visitor'){return navigate('/')}
              else {setInfo(res.data)}
          })
          .catch(err => console.log("Error retrieving items",err))
      }, []);

      const renderPurchaseHistory = () => {
        if (info === undefined) {
            return <div>Loading...</div>
        }
        else {

            return info.map((item, i) => {
                return (

                    <div>
                        <HistoryPageItem key={i} title={item.title} id={item._id} poster={item.poster} price={item.price}/>
                    </div>
                )
            })
        }
    }


  return (
    <Container fluid id="homepage-container">
      <Header />
      <Container fluid id="homepage-content">
        <Row>
          <Col id="hp-header-random">
            <div id="home-item-title">Purchase History</div>
          </Col>
        </Row>

        <Row>
          <Col id="active-items">
            <div id="all-active-items">{renderPurchaseHistory()}</div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default History;
