import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
import { LandingPage, About, ManageItems, SellerForm} from './components/index'

function App() {
  return (
    <main className = "App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/SellerForm' element={<SellerForm/>}></Route>
          <Route path='/ManageItems' element={<ManageItems/>}></Route>
        </Routes>
      </Router>
      {/*<Header logged = "True"/> {/*header for logged users*/}
      {/*<Header logged = "False"/> {/*header for unlogged users*/}
    </main>

  );
}

export default App;
