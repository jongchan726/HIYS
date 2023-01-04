import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import UserLogin from './pages/UserLogin';
import Signup from './pages/Signup';
import Findid from './pages/Findid'
import Findpw from './pages/Findpw'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/find-id" element={<Findid />} />
      <Route path="/find-pw" element={<Findpw />} />
    </Routes>
    </Router>
  );
}

export default App;
