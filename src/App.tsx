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
import AdminRental from './pages/AdminRental'
import Notification from './pages/Notification'
import Test from './pages/Test'
import AddCamera from './pages/AddCamera'
import Notlogin from './pages/Notlogin'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/home" element={<UserHome />} />
      <Route path="/admin" element={<AdminHome />} />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/find-id" element={<Findid />} />
      <Route path="/find-pw" element={<Findpw />} />
      <Route path="/" element={<Rental />} />
      <Route path="/ad-rental" element={<AdminRental/>} />
      <Route path="/Notification" element={<Notification/>} />
      <Route path="/test" element={<Test />} />
      <Route path="/add-camera" element={<AddCamera />} />
      <Route path="/nologin" element={<Notlogin />} />
    </Routes>
    </Router>
  );
}

export default App;
