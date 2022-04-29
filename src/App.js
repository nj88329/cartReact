import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
  
import Details from './Details';
// import store from './store';
// import {Provider} from 'react-redux';
import HomePage from './HomePage';


const App = () => {
  return (
  
   <Router>      
    <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/details/:i' element={< Details  />}></Route>
          <Route exact path='/cart' element = {<Cart/>}></Route>
    </Routes>
  </Router>
        
       
  )
}

export default App;