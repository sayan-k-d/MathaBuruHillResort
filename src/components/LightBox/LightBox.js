import React, { useEffect, useState } from "react";

const LightBox = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentIndex(props.currentIndex ? props.currentIndex : 0);
  }, []);
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === props.selectedImage.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.selectedImage.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="lightbox">
      <span className="close" onClick={props.closeFullscreen}>
        &times;
      </span>
      <button className="prev-button" onClick={prevImage}>
        &#10094;
      </button>
      <img
        src={`${props.selectedImage[currentIndex]}`}
        alt={props.selectedImage}
      />
      <button className="next-button" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default LightBox;
