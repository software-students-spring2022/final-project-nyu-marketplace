import "./result.css"
import { useLocation } from "react-router-dom";
import {Header, SearchBar, ItemLine} from "./index"
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"
import Container from 'react-bootstrap/Container'
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from 'react'






const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

const ResultPage = (props) => {

    const [result, setResult] = useState()
    const query = useQuery()
    useEffect (() => { 
        axios.get(`http://localhost:3000/search/?q=${query.get("q")}`)
        .then(function (response) {
          // handle success
          console.log(response);
          setResult(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })

    }, [])

    
    

    return (
        <>
            <Header logged = "True"/>
            <SearchBar/>
            {result === undefined ? <Spinner/>:<ItemLine data={result}/>}
        </>
    )
}

export default ResultPage