import React from "react";
import { Link } from "react-router-dom";

function Topbar() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-light px-3 px-lg-5">
        <div className="row gx-0 align-items-center">
          {/* Left Side */}
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap">
              <small className="py-2">
                <i className="far fa-clock text-primary me-2" />
                Opening Hours: 10:00 A.M to 8:00 P.M
              </small>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end bg-primary text-white top-shape px-3 px-md-4 py-2 flex-wrap">
              <div className="me-3 pe-md-3 border-end py-1">
                <p className="m-0">
                  <i className="fa fa-envelope-open me-2" />
                  stapas2010@gmail.com
                </p>
              </div>
              <div className="me-3 py-1">
                <p className="m-0">
                  <i className="fa fa-phone-alt me-2" />
                  +91 8925168697
                </p>
              </div>
              <div className="py-1">
                <Link className="btn btn-secondary btn-sm px-3" to="/userlogin">
                  User Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
    </>
  );
}

export default Topbar;
