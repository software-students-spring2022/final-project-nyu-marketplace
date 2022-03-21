import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
//import { LandingPage } from './components'
import { LandingPage, About, Login, Register, ResultPage, Homepage, ManageItems, SellerForm, Profile } from './components/index'

function App() {
  return (
    <main className = "App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/SellerForm' element={<SellerForm/>}></Route>
          <Route path='/ManageItems' element={<ManageItems/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/result' element={<ResultPage/>}></Route>
          <Route path='/homepage' element={<Homepage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Routes>
      </Router>
      {/*<Header logged = "True"/> {/*header for logged users*/}
      {/*<Header logged = "False"/> {/*header for unlogged users*/}
    </main>

  );
}

export default App;
