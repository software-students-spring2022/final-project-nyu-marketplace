import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
import { LandingPage } from './components'

function App() {
  return (
    /*
    <Router>
      <Routes>
        <Route path="/" element={<TestPage/>}></Route>
      </Routes>
    </Router>
    */
    <main className = "App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}></Route>
        </Routes>
      </Router>
    </main>

  );
}

export default App;
