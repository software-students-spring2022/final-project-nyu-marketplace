import "./result.css"
import { useLocation } from "react-router-dom";
import {Header, SearchBar, ItemLine} from "./index"
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from 'react'

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

const ResultPage = (props) => {

  const [result, setResult] = useState()
  const query = useQuery()
  
  useEffect (() => { 
    fetch(`http://localhost:3000/result?${query.toString()}`, {credentials: 'include'})
    .then(res => res.json())
    .then((resJson) => {
      setResult(resJson);
    })            
    .catch((err) => {
      console.log(err);
    });  
  })
  
  return (
    <>
      <Header logged = "True"/>
      <SearchBar/>
      {result === undefined ? <Spinner/>:<ItemLine data={result}/>}
    </>
  )
}

export default ResultPage