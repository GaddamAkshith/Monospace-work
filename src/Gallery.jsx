import React from "react";
import './styles/herosection.css'; 
import one from "./assets/one.jpg";
import two from "./assets/two.jpg";
import three from "./assets/three.jpg";
import four from "./assets/four.jpg";
import five from "./assets/five.jpg";
import six from "./assets/six.jpg";
import seven from "./assets/seven.jpg";
import eight from "./assets/eight.jpg";
import nine from "./assets/nine.jpg";
import fallback from "./assets/fallback.jpg";

const Gallery = () => {
  const images = [
    { src: one, caption: "Image 1" },
    { src: two, caption: "Image 2" },
    { src: three, caption: "Image 3" },
    { src: four, caption: "Image 4" },
    { src: five, caption: "Image 5" },
    { src: six, caption: "Image 6" },
    { src: seven, caption: "Image 7" },
    { src: eight, caption: "Image 8" },
    { src: nine, caption: "Image 9" },
  ];

  return (
    <div id="wrapper">
      <div className="container">
        <h1>Wedding Gallery</h1>
        <div className="gallery">
          {images.map((image, index) => (
            <figure key={index} className="card">
              <img 
                src={image.src} 
                alt="" 
                onError={(e) => { e.target.onerror = null; e.target.src = fallback; }} 
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
