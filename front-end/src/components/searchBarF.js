import "./searchBar.css"
import 'bootstrap/dist/css/bootstrap.css';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = (props) => {

    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <Container fluid><form method = "get" action = "/favoritespage">
                <center><Row>
                    <Col><input type = "radio" checked={category === 'Academic'} onClick={() => {setCategory('Academic')}}/> Academic Supplies</Col>
                    <Col><input type = "radio" checked={category === 'Dorm'} onClick={() => {setCategory('Dorm')}}/> Dorm Appliances</Col>
                    <Col><input type = "radio" checked={category === 'Clothing'} onClick={() => {setCategory('Clothing')}}/> Clorhing</Col>
                    <Col><input type = "radio" checked={category === 'Other'} onClick={() => {setCategory('Other')}}/> Other</Col>
                </Row></center>
                <center><Row>
                    <Col xs = {1}></Col>
                    <Col><input type = "text" name = "searchText" value={keyword} onChange={e => {setKeyword(e.target.value)}}/></Col>
                    <Col xs = {1}><input type = "submit" value = "Search" onClick={e => {
                        e.preventDefault();
                        if (category === ''){
                            setCategory('')
                            setKeyword('')
                            navigate(`/favoritespage?searchText=${keyword}`);
                        } else {
                            setCategory('')
                            setKeyword('')
                            navigate(`/favoritespage?category=${category}&searchText=${keyword}`)
                        }
                    }}/></Col>
                    <Col xs = {1}></Col>
                </Row></center>
            </form></Container>
        </>
    )
}

export default SearchBar;