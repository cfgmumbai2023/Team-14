import './App.css';
import NavBar from './Navbar.js';
import Academics from './Academics.js';
import Criteria from './criteria';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// import Sidebar from './sidebar';
function App() {
  return (
    <Router>
    <div className="App">
      
      <NavBar/>
      <Academics/>
      <Criteria/>
      <Routes> 
           <Route exact path="/criteria" element={<Criteria/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
