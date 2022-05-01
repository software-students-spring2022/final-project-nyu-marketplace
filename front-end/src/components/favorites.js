import "./favorites.css"
import { useLocation, useNavigate } from "react-router-dom";
import {Header, SearchBarF, ItemLine} from "./index"
import 'bootstrap/dist/css/bootstrap.css';
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from 'react'

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

const FavoritesPage = (props) => {

  const [result, setResult] = useState()
  const query = useQuery()

  const navigate = useNavigate(); 
  
  useEffect (() => { 
    fetch(`/favorites?${query.toString()}`, {credentials: 'include', headers: {'Authorization': `Bearer ${sessionStorage.getItem("jwt")}`}})
    .then(res => res.json())
    .then((resJson) => {
      if (resJson.err === 'visitor'){return navigate('/')}
      setResult(resJson);
    })            
    .catch((err) => {
      console.log(err);
    });  
  }, [])
  
  return (
    <>
      <Header logged = "True"/>
      <SearchBarF/>
      {result === undefined ? <Spinner/>:<ItemLine data={result}/>}
    </>
  )
}

export default FavoritesPage