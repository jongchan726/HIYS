import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import UserLogin from './pages/UserLogin';
import Teacherlogin from './pages/Teacherlogin';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/teacher-login" element={<Teacherlogin />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
    </Router>
  );
}

export default App;
