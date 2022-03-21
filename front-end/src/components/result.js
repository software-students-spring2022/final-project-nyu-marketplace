import "./result.css"
import {Header, SearchBar, ItemLine} from "./index"
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container'

const ResultPage = (props) => {
    return (
        <>
            <Header logged = "True"/>
            <SearchBar/>
            <ItemLine/>
        </>
    )
}

export default ResultPage