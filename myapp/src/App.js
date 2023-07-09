import './App.css';
import NavBar from './Navbar.js';
import Academics from './Academics.js';
import Criteria from './criteria';
import Sidebar from './sidebar';
import './sidebar.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// import Sidebar from './sidebar';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes> 
        <Route exact path='/' element={[<NavBar/>,<Sidebar/>,<Academics/>]}/>
      {/* <NavBar/> */}
      {/* <div className='sidebar_'> */}
        <Route exact path="/criteria" element={<Criteria/>}/>
        {/* </div> */}
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
