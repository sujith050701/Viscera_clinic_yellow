import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Topbar() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isLargeScreen) return null; // Do not render on small screens

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid bg-light px-3 px-lg-5">
        <div className="row gx-0">
          <div className="col-12 col-md-4 text-center mb-2 mb-lg-0">
            <div className="d-flex align-items-center justify-content-center">
              <small className="py-2">
                <i className="far fa-clock text-primary me-2" />
                Opening Hours: 10:00 A.M to 8:00 P.M
              </small>
            </div>
          </div>
          <div className="col-12 col-md-8 text-center text-lg-end top">
            <div
              className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-end bg-primary text-white px-3 px-lg-5 text-nowrap"
              style={{
                minHeight: "30px",
                width: "100%",
                flexWrap: "wrap",
                backgroundColor: "yellow",
              }}
            >
              {/* Email */}
              <div className="d-flex align-items-center me-3 py-2">
                <i
                  className="fa fa-envelope-open me-2 ic"
                  style={{ position: "relative", right: "2cm" }}
                />
                <span
                  className="text-nowrap ic"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    position: "relative",
                    right: "1.8cm",
                  }}
                >
                  visceranaturalsclinicpvtltd@gmail.com
                </span>
              </div>

              {/* User Login Button */}
              <div className="py-2">
                <Link
                  className="btn btn-secondary btn-sm px-3 text-nowrap"
                  to="/userlogin"
                  style={{ backgroundColor: "rgba(39, 84, 142, 0.9)" }}
                >
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
