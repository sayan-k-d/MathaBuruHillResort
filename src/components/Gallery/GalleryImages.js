import React, { useRef, useState } from "react";
import { Image } from "react-bootstrap";
import LightBox from "../LightBox/LightBox";

const GalleryImages = (props) => {
  console.log("Gallery Images", props.images && props.images);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRef = useRef(null);
  const numImages = props.images && props.images.length;
  const imageWidth = imageRef.current ? imageRef.current.offsetWidth : 0;
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === numImages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numImages - 1 : prevIndex - 1
    );
  };
  const openFullscreen = (imageSrc, index) => {
    setSelectedImage(imageSrc);
    setCurrentIndex(index);
  };
  const closeFullscreen = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };
  const images = props.images;
  console.log("selectedImage", selectedImage);
  return (
    <div className="gallery-container">
      <button className="prev-button" onClick={prevImage}>
        &#10094;
      </button>
      <div
        className="gallery-images"
        // ref={imageRef}
      >
        {images &&
          images.length > 0 &&
          images.map((image, index) => (
            <Image
              key={index.toString()}
              src={`${image && image}`}
              alt="Image 1"
              onClick={() => openFullscreen(image, index)}
              ref={imageRef}
              style={{
                transform: `translateX(-${currentIndex * imageWidth}px)`,
              }}
            />
          ))}

        {currentIndex !== null && selectedImage && (
          <LightBox
            selectedImage={images && images}
            currentIndex={currentIndex}
            closeFullscreen={closeFullscreen}
            // selectedImage={selectedImage}
            // nextImage={nextImage}
            // prevImage={prevImage}
          />
        )}
      </div>
      <button className="next-button" onClick={nextImage}>
        &#10095;
      </button>
    </div>
  );
};

export default GalleryImages;
