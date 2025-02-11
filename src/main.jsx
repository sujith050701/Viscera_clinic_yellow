import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./common/topbar";
import Navbar from "./common/navbar";
import Vhome from "./component1/Home/vhome";
import Vabout from "./component1/About/vabout";
import Vdoctors from "./component1/Doctors/vdoctors";
import Vappointment from "./component1/Appointment/vappointment";
import Vproducts from "./component1/Products/vproducts";
import Vcontact from "./component1/Contact/vcontact";
import Vbranch from "./component1/Branch/vbranch";
import Vgallery from "./component1/Gallery/vgallery";
import Vtestimonial from "./component1/Testimonials/vtestimonial";
import AdminLogin from "./layout/admin/adminlogin";
import Dashboard from "./layout/admin/admindashboard";
import UserDashboard from "./layout/user/userdashboard1";
import News from "./common/newsletter";
import Footer from "./common/footer";
import Auth from "./layout/user/userlogin";



function Main1() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const [token, setToken] = useState("");
      const [userId,setuserId] = useState("");
    return (
        <Router>
            <div className="app-container">
                <Topbar/>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Vhome/>} />
                    <Route path="/about" element={<Vabout />} />
                    <Route path="/doctors" element={<Vdoctors />} />
                    <Route path="/appointment" element={<Vappointment />} />
                    <Route path="/product" element={<Vproducts />} />
                    <Route path="/contact" element={<Vcontact />} />
                    <Route path="/branch" element={<Vbranch />} />
                    <Route path="/gallery" element={<Vgallery />} />
                    <Route path="/testimonial" element={<Vtestimonial/>} />
                    <Route path="/userlogin" element={<Auth />} />
                    <Route path="/adminlogin" element={<AdminLogin/>} />
                    <Route path="/dashboard" element={<Dashboard id={userId} />} />
                    <Route path="/userdashboard" element={<UserDashboard token={token}/>} />
                    <Route path="/" element={<Vhome/>} />
                </Routes>
                <News/>
                <Footer/>
            </div>
        </Router>
    );
}

export default Main1;