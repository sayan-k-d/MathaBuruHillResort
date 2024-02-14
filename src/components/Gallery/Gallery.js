import React from "react";

import "./Gallery.css";

import GalleryImages from "./GalleryImages";
const Gallery = (props) => {
  console.log("Quotes", props.generalInfo && props.generalInfo.gallery);
  const gallery = props.generalInfo && props.generalInfo.gallery;

  return (
    <div className="gallery" id="gallery">
      <div className="container-fluid section">
        <div className="title">
          <h1>{gallery && gallery.title}</h1>
          <p>{gallery && gallery.description}</p>
        </div>

        <GalleryImages images={gallery && gallery.images} />
      </div>
    </div>
  );
};

export default Gallery;
