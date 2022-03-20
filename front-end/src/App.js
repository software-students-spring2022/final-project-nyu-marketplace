import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
//import { LandingPage } from './components'
import { LandingPage, About } from './components/index'

function App() {
  return (
    <main className = "App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
      {/*<Header logged = "True"/> {/*header for logged users*/}
      {/*<Header logged = "False"/> {/*header for unlogged users*/}
    </main>

  );
}

export default App;
