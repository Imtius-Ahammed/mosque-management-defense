import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddCampaign from '../Dashboard/AddCampaign/AddCampaign';
import Dashboard from '../Dashboard/Dashboard';
import Donate from '../Donate/Donate';
import EventDetails from '../Home/Event/EventDetails';
import HelpDetails from '../Home/Help/HelpDetails';
import Home from '../Home/Home';
import Login from '../Login/Login/Login';
import Register from '../Login/Register/Register';
import Scolar from '../Scolar/Scolar';
import Header from '../Shared/Header/Header';
import Info from '../../Pages/Dashboard/Info';
import Payment from '../Payment/Payment';
import Side from '../Dashboard/Side/Side';
import Khutba from '../Dashboard/Khutba/Khutba';
import ListenKhutba from '../ListenKhutba/ListenKhutba';
import TestUpdate from '../Dashboard/ManageCampaign/TestUpdate';
import TestLogin from '../Login/Login/TestLogin';
import Footer from '../Shared/Footer/Footer';


const Routesin = () => {
    return (
        <div className="App">
            <React.Fragment />
            <nav>
                <Header></Header>
            </nav>
            <Routes>


                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/info" element={<Info></Info>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/side" element={<Side></Side>}></Route>
                <Route path='/donate' element={<Donate></Donate>}></Route>
                <Route path='/scolar' element={<Scolar></Scolar>}></Route>
                <Route path='/khutba' element={<ListenKhutba></ListenKhutba>}></Route>
                <Route path='/test' element={<TestUpdate></TestUpdate>}></Route>
                <Route path='/testlogin' element={<TestLogin></TestLogin>}></Route>


                <Route path="/login" element={<Login></Login>}></Route>

                <Route path="/register" element={<Register></Register>}></Route>

                <Route path="/addcampaign" element={<AddCampaign></AddCampaign>}></Route>

                <Route path="/payment/:id" element={<Payment></Payment>}></Route>


                <Route path='/campaign/:id' element={
                    <HelpDetails></HelpDetails>}></Route>

                <Route path='/event/:id' element={
                    <EventDetails></EventDetails>}></Route>
            </Routes>
            <Footer></Footer>
            <React.Fragment />
        </div>
    );
}

export default Routesin;