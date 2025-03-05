import React, { useState, useEffect } from "react";

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const adminPhoneNumber = "918925168697";
        const { name, email, subject, message } = formData;

        const whatsappMessage = `Hello, Admin SenthilKumar!
    
    You have a new contact form submission:
    
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}`;

        const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-xl-4 col-lg-6">
                                <div className="bg-light rounded h-100 p-5">
                                    <div className="section-title">
                                        <h5 className="position-relative d-inline-block text-uppercase" style={{ fontWeight: 'bold', color: '#345da2' }}>Contact Us</h5>
                                        <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
                                        <i className="bi bi-geo-alt fs-3 me-3" style={{ color: '#345da2' }}></i>
                                        <div>
                                            <h5 className="mb-0 text-secondary">Our Office</h5>
                                            <span className="text-black">No.29A, Vaithiyanathapuram, Ellis Nagar, SS colony, Madurai, Tamil Nadu, India - 625016</span>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex align-items-center">
                                        <i className="bi bi-envelope-open fs-3 me-3" style={{ color: '#345da2' }}></i>
                                        <div>
                                            <h5 className="mb-0 text-secondary">Email Us</h5>
                                            <span className="text-black">visceranaturalsclinicpvtltd
                                                @gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-phone-vibrate fs-3 me-3" style={{ color: '#345da2' }}></i>
                                        <div>
                                            <h5 className="mb-0 text-secondary">Call Us</h5>
                                            <span className="text-black">+91 8925168697</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6">
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4"
                                                placeholder="Your Name *"
                                                required
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4"
                                                placeholder="Your Email *"
                                                required
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4"
                                                placeholder="Subject *"
                                                required
                                                style={{ height: "55px" }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="form-control border-0 bg-light px-4 py-3"
                                                rows={5}
                                                placeholder="Message *"
                                                required
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn w-100 py-3"
                                                type="submit"
                                                style={{ background: 'rgba(39, 84, 142, 0.9)', border: 'none', color: 'white' }}
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5534.571279471804!2d78.09346185733364!3d9.926731595194722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf6f93fa5ba9%3A0x9a5c0debe4bdf3e3!2sViscera%20Natural%20care!5e0!3m2!1sen!2sin!4v1736492529782!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: "0" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;