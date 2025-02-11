import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";

function Gallery() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="gallery-container">
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/asset/img/gallery1.jpeg" alt="Gallery image 1" />
          </div>
          <div className="gallery-item">
            <img src="/asset/img/gallery2.jpeg" alt="Gallery image 2" />
          </div>
          <div className="gallery-item">
            <img src="/asset/img/gallery3.jpeg" alt="Gallery image 3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;

