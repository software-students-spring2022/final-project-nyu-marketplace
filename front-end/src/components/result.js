import "./result.css"
import {Header} from "./index"
import 'bootstrap/dist/css/bootstrap.css';
import {SearchBar} from "./index";

const ResultPage = (props) => {
    return (
        <>
            <Header logged = "True"></Header>
            <SearchBar></SearchBar>
        </>
    )
}

export default ResultPage