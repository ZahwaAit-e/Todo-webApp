
import React from 'react';

import Home from './page/Home/Home';
import Tasks from './page/Task/Tasks';
import Login from './page/Login/Login';
import Signup from './page/signup/Signup';
import Navbar from './components/navbar/Navbar';
import Video from "./components/video/Video";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import NotFound from './page/NotFound/NotFound';
 

const App = () => {
  return (
    <Router>
      <Navbar />
    <Routes>
    <Route path='/Home' element={<Home/>} />
    <Route path='/tasks' element={<Tasks/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='*' element={<NotFound/>} />
    </Routes>
    <Video/>

    </Router>
    
  );
};

export default App;