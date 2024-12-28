import React,{useEffect} from "react";


import { useLocation, Link } from "react-router-dom";
import AboutHead from "./heading/abouthead";
import Service from "./service";

function About() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const textColorStyle = { color: "#345da2" }; 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div style={textColorStyle}>
        {!isHomePage && <AboutHead />}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title mb-4">
                  <h5 className="position-relative d-inline-block" style={{ color: "#345da2" }}><strong>About Us</strong></h5>
                  <h1 className="mb-0">Your Trusted Holistic Wellness Center</h1>
                </div>
                <h4 className="text-body mb-4" style={{ color: "#345da2"}}>
                  Where holistic healing meets innovative care for your wellness journey.
                </h4>
                <p className="mb-4" style={{ color: "#345da2" }}>
                  At Viscera Naturals Clinic, we integrate advanced technology with personalized care to offer the best treatments and procedures for our patients. Our facilities are equipped with cutting-edge technology, and our team of experts is dedicated to providing exceptional service.
                </p>
                <div className="row g-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Award Winning</h5>
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Professional Staff</h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />24/7 Opened</h5>
                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3" />Fair Prices</h5>
                  </div>
                </div>
                <Link 
                  to="/appointment" 
                  className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" 
                  style={{ backgroundColor: '#2b579d' }}
                  data-wow-delay="0.6s"
                >
                  Make Appointment
                </Link>
              </div>
              <div className="col-lg-5" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img 
                    className="position-absolute w-100 h-100 rounded wow zoomIn" 
                    data-wow-delay="0.9s" 
                    src="/asset/img/about.jpg" 
                    style={{ objectFit: "cover" }} 
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Service/>
    </>
  );
}

export default About;
