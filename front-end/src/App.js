import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
//import { LandingPage } from './components'
import { LandingPage, About, Login, Register, ResultPage, Homepage, ManageItems, SellerForm, DetailPage, Profile, FavoritesPage, EditListing, History } from './components/index'

function App() {
  return (
    <main className = "App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/new-listing' element={<SellerForm/>}></Route>
          <Route path='/listings' element={<ManageItems/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/result' element={<ResultPage/>}></Route>
          <Route path='/homepage' element={<Homepage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/detail' element={<DetailPage/>}></Route>
          <Route path='/favorites' element={<FavoritesPage/>}></Route>
          <Route path='/edit-listing' element={<EditListing/>}></Route>
          <Route path='/history' element={<History/>}></Route>
        </Routes>
      </Router>
    </main>

  );
}

export default App;
