import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Admin from './Components/Admin';
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
import Foot from './Components/Foot';
import Home from './Components/Home';
import Navigationbar from './Components/Navigationbar';
import Shop from './Components/Shop';
import './Components/Styles.css';
function App() {
  
  return (

    
    <div>

  
<Router>
  

  <Navigationbar/>
  
<Routes>
<Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Home' element={<Home/>}></Route>
      <Route exact path='/Shop' element={<Shop/>}></Route>
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/Admin' element={<Admin/>}></Route>
      <Route exact path='/Cart' element={<Cart/>}></Route>
      <Route exact path='/Dashboard' element={<Dashboard/>}></Route>
     
     
      </Routes>
      <Foot/>
      
      </Router>
    </div>
  );
}

export default App;
