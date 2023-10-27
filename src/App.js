import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './Login';
import Signup from './Signup';
import NavigationBar from './NavigationBar';
import Homepage from './Homepage';

function App() {
  
  return (
    <>    
  <Routes>
  <Route path='/' element= {<NavigationBar />}>
  <Route index element= {<Homepage/>}/>

  <Route path='/login' element= {<Login />}/>
  <Route path='/signup' element= {<Signup />}/>
  </Route>
  </Routes>

  </>
  );
}

export default App;