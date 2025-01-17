import React from "react";
// import
import './styles/index.css'; 

const Gallery = () => {
  const images = [
    "one.jpg",
    "two.jpg",
    "three.jpg",
    "four.jpg",
    "five.jpg",
    "six.jpg",
    "seven.jpg",
    "eight.jpg",
    "nine.jpg",
  ];

  return (
    <div id="wrapper">
      <div className="container">
        <h1>Wedding Gallery</h1>
        <div className="gallery">
          {images.map((image, index) => (
            <figure key={index} className="card">
              {/* Construct the full path using the image name */}
              <img 
                src={`/assets/${image}`} 
                alt="" // Updated to remove redundancy
                onError={(e) => { e.target.onerror = null; e.target.src ='fallback.jpg'; }} // Fallback image
              />
              <figcaption>{`Image ${index + 1}`}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
