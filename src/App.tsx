import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome'
import UserHome from './pages/UserHome'
import UserLogin from './pages/UserLogin';
import Signup from './pages/Signup';
import Findid from './pages/Findid';
import Findpw from './pages/Findpw';
import Rental from './pages/Rental';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/sign-up" element={<Signup onSubmit={function (username: string, password: string): void {
          throw new Error('Function not implemented.');
        } } />} />
      <Route path="/find-id" element={<Findid />} />
      <Route path="/find-pw" element={<Findpw />} />
      <Route path="/rental" element={<Rental />} />
    </Routes>
    </Router>
  );
}

export default App;
