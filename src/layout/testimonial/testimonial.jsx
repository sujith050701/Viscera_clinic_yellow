import React, { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [userFeedback, setUserFeedback] = useState("");
    const [allTestimonials, setAllTestimonials] = useState([]);
    const [userImage, setUserImage] = useState(null);
    const intervalRef = useRef(null);

    const isAdmin = false; // Set this based on your authentication logic

    const handleFeedbackChange = (event) => {
        setUserFeedback(event.target.value);
    };

    const handleImageChange = (event) => {
        setUserImage(event.target.files[0]);
    };

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        const newTestimonial = {
            id: allTestimonials.length + 1,
            image: userImage ? URL.createObjectURL(userImage) : "/images/default_user.jpg",
            text: userFeedback,
        };
        setAllTestimonials([...allTestimonials, newTestimonial]);
        setUserFeedback("");
        setUserImage(null);
        document.querySelector('input[type="file"]').value = "";
    };

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            allTestimonials.length > 0 ? (prevIndex === allTestimonials.length - 1 ? 0 : prevIndex + 1) : 0
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            allTestimonials.length > 0 ? (prevIndex === 0 ? allTestimonials.length - 1 : prevIndex - 1) : 0
        );
    };

    const handleFeedbackDelete = (index) => {
        if (isAdmin) { // Check if the user is an admin
            setAllTestimonials((prevTestimonials) => 
                prevTestimonials.filter((_, i) => i !== index)
            );
        } else {
            alert("Only admins can delete feedback."); // Alert for non-admin users
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(nextTestimonial, 3000);

        return () => clearInterval(intervalRef.current);
    }, [allTestimonials]);

    const handleMouseEnter = () => {
        clearInterval(intervalRef.current);
    };

    const handleMouseLeave = () => {
        intervalRef.current = setInterval(nextTestimonial, 3000);
    };

    return (
        <>
        
        <section className="testimonial-section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="container">
                <h2 className="section-title">User Feedback</h2>
                <div className="testimonial-carousel">
                    <button className="nav-button prev" onClick={prevTestimonial}>
                        &lt;
                    </button>
                    <div className="testimonial-card">
                        <div className="testimonial-image">
                            <img src={allTestimonials.length > 0 && allTestimonials[currentIndex].image ? allTestimonials[currentIndex].image : '/images/default_user.jpg'} alt="User" />
                        </div>
                        <div className="testimonial-content">
                            <p className="testimonial-text">
                                "{allTestimonials.length > 0 ? allTestimonials[currentIndex].text : 'No feedback yet.'}"
                            </p>
                            <div className="testimonial-author">
                                <h4>{allTestimonials.length > 0 ? allTestimonials[currentIndex].name : 'Anonymous'}</h4>
                                <p>{allTestimonials.length > 0 ? allTestimonials[currentIndex].role : 'User Feedback'}</p>
                            </div>
                            <button onClick={() => handleFeedbackDelete(currentIndex)} className="delete-feedback-button">Delete Feedback</button>
                        </div>
                    </div>
                    <button className="nav-button next" onClick={nextTestimonial}>
                        &gt;
                    </button>
                </div>
                <form onSubmit={handleFeedbackSubmit}>
                    <input type="file" accept="image/*" onChange={handleImageChange} required />
                    <textarea 
                        value={userFeedback} 
                        onChange={handleFeedbackChange} 
                        placeholder="Leave your feedback here..." 
                        required 
                    />
                    <button type="submit" className="btn-custom">Submit Feedback</button>
                </form>
            </div>
        </section></>
    );
};

export default Testimonial;