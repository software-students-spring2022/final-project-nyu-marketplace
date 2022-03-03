import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// Import components from 'components folder'
import { TestPage } from './components'

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<TestPage/>}></Route>
      </Routes>
    </Router>
    

  );
}

export default App;
