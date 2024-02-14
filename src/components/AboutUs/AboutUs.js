import React from "react";
import { Image } from "react-bootstrap";
import "./AboutUs.css";

const AboutUs = (props) => {
  console.log("About Us", props.generalInfo && props.generalInfo.aboutUs);
  const aboutUs = props.generalInfo && props.generalInfo.aboutUs;
  const formatDescription = (description) => {
    const sentences = description ? description.split(".") : [];
    let paragraph = "";
    return sentences.map((sentence, index) => {
      paragraph += sentence + ". ";
      if ((index + 1) % 2 === 0) {
        const text = paragraph;
        paragraph = "";
        return <p key={index}>{text}</p>;
      }
    });
  };

  return (
    <div className="about" id="about-us">
      <div className="container section">
        <div className="title">
          <h1>{aboutUs && aboutUs.title}</h1>
        </div>
        <div className="aboutUsContent">
          <div className="aboutUsImage">
            <Image src={`${aboutUs && aboutUs.image}`} alt="image" />
          </div>
          <div className="description">
            {formatDescription(aboutUs && aboutUs.description)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
