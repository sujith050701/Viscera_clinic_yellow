import React, { useEffect } from "react";
import DoctorHead from "./heading/doctorhead";
import { useLocation, Link } from "react-router-dom";

function Doctor() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Array of doctor details
    const doctors = [
        { id: 1, name: "R Senthilkumar", specialty: "M.acu., Ad.acu., Dip.in naturopathy, M.Reflexology", img: "/asset/img/team-1.jpg" },
        { id: 2, name: "S Pramila", specialty: "M.acu.", img: "/asset/img/team-2.jpg" },
        { id: 3, name: "Sundar", specialty: "M.acu., Ad.acu.", img: "/asset/img/team-3.jpg" },
        { id: 4, name: "Rajesh", specialty: "M.acu., Ad.acu.", img: "/asset/img/team-4.jpg" },
        { id: 5, name: "Sam", specialty: "M.acu.", img: "/asset/img/team-5.jpg" },
        { id: 6, name: "Alaguraja", specialty: "M.acu.", img: "/asset/img/team-6.jpg" },
        { id: 7, name: "Muthukrishnan", specialty: "M.acu., M.Reflexology", img: "/asset/img/team-7.jpg" },
        { id: 8, name: "Penial", specialty: "M.acu., M.Reflexology", img: "/asset/img/team-8.jpg" },
        { id: 9, name: "Emanuvel", specialty: "M.acu.", img: "/asset/img/team-9.jpg" },
        { id: 10, name: "Sivakumar", specialty: "M.acu.", img: "/asset/img/team-10.jpg" },
        { id: 11, name: "Sathish pandi", specialty: "M.acu.", img: "/asset/img/team-11.jpg" },
        { id: 12, name: "Arun pandi", specialty: "M.acu.", img: "/asset/img/team-12.jpg" },
        { id: 13, name: "Sutha", specialty: "M.acu.", img: "/asset/img/team-13.jpg" },
        { id: 14, name: "Karpagavalli", specialty: "M.acu.", img: "/asset/img/team-14.jpg" },
    ];

    return (
        <>
            {!isHomePage && <DoctorHead />}

            {/* Admin Panel Button - Only show when not on home page */}
            {!isHomePage && (
                <div className="container-fluid py-3">
                    <div className="container">
                        <div className="text-end">
                            <Link to="/adminlogin" className="btn" style={{ backgroundColor: "rgba(39, 84, 142, 0.9)", color: "#fff" }}>Admin Panel</Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Team Section Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* Section Title */}
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                            <div
                                className="section-title rounded h-100 p-5"
                                style={{ background: "linear-gradient(rgba(206, 197, 22, 0.7), rgba(190, 182, 47, 0.85))" }}
                            >
                                <h5
                                    className="position-relative d-inline-block text-uppercase"
                                    style={{ color: "rgba(39, 84, 142, 0.9)" }}
                                >
                                    Our Doctors
                                </h5>
                                <h1 className="text-white display-6 mb-4">Meet Our Certified &amp; Experienced Doctors</h1>
                                <Link
                                    to="/appointment"
                                    className="btn py-3 px-5"
                                    style={{ backgroundColor: "rgba(39, 84, 142, 0.9)", color: "#fff" }}
                                >
                                    Appointment
                                </Link>
                            </div>
                        </div>

                        {/* Dynamic Doctor Cards */}
                        {doctors.slice(0, isHomePage ? 5 : doctors.length).map((doctor, index) => (
                            <div
                                key={doctor.id}
                                className="col-lg-4 wow slideInUp"
                                data-wow-delay={`${0.1 + index * 0.2}s`}
                            >
                                <div className="team-item">
                                    <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                                        <img className="img-fluid rounded-top w-100" src={doctor.img} alt={doctor.name} />
                                    </div>
                                    <div
                                        className="team-text position-relative text-center rounded-bottom p-4 pt-5"
                                        style={{ backgroundColor: "rgba(206, 197, 22, 0.7)" }}
                                    >
                                        <h4 className="mb-2" style={{ color: "rgba(39, 84, 142, 0.9)" }}>{doctor.name}</h4>
                                        <p className="text-primary mb-0">{doctor.specialty}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Team Section End */}
        </>
    );
}

export default Doctor;
