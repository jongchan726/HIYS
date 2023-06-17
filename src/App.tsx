import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome'
import UserHome from './pages/UserHome'
import UserLogin from './pages/Login';
import Signup from './pages/Signup';
import Findid from './pages/Findid';
import Findpw from './pages/Findpw';
import Rental from './pages/Rental';
import ListDetail from './pages/ListDetail'
import RentalList from './pages/RentalList'
import RentalRoom from './pages/RentalRoom'
import RentalRoom_S from './pages/RentalRoom_S'
import Test from './pages/Test'
import AddCamera from './pages/AddCamera'
import Notlogin from './pages/Notlogin'
import RentalStatus from './pages/RentalStatus'



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
      <Route path="/rental" element={<Rental />} />
      <Route path="/listdetail/:id" element={<ListDetail/>} />
      <Route path="/rentallist" element={<RentalList/>} />
      <Route path="/test" element={<Test />} />
      <Route path="/add-camera" element={<AddCamera />} />
      <Route path="/" element={<Notlogin />} />
      <Route path="/status" element={<RentalStatus />} />
      <Route path="/Room" element={<RentalRoom />} />
      <Route path="/Room_S" element={<RentalRoom_S />} />
    </Routes>
    </Router>
  );
}

export default App;