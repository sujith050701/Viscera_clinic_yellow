import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
    setTestimonials(storedTestimonials);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const newTestimonial = {
        name,
        review,
        fileUrl: reader.result,
        fileName: file ? file.name : "",
        fileType: file ? file.type : "", 
      };

      const updatedTestimonials = [newTestimonial, ...testimonials];
      setTestimonials(updatedTestimonials);
      localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      reader.onloadend();
    }

    setName("");
    setReview("");
    setFile(null);
  };

  const handleDelete = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Patient Testimonials</h2>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="testimonial-input"
          required
        />
        <textarea
          placeholder="Your Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="testimonial-textarea"
          required
        ></textarea>
        <input type="file" onChange={handleFileChange} className="testimonial-file-input" />
        <button type="submit" className="testimonial-submit-button">Submit</button>
      </form>
      <div className="testimonial-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-item">
            <h3 className="testimonial-name">{t.name}</h3>
            <p className="testimonial-review">{t.review}</p>
            {t.fileUrl && t.fileType && t.fileType.startsWith("image/") ? (
              <img src={t.fileUrl} alt="Testimonial" className="testimonial-image" />
            ) : (
              t.fileUrl && (
                <a href={t.fileUrl} target="_blank" rel="noopener noreferrer" className="testimonial-file-link">
                  {t.fileName || "View Attachment"}
                </a>
              )
            )}
            {/* <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
