import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
import { TestPage } from './components'

import Header from "./header";

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
      <Header logged = "True"/> {/*header for logged users*/}
      <br />
      <Header logged = "False"/> {/*header for unlogged users*/}
    </main>

  );
}

export default App;
