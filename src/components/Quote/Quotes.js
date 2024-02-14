import React from "react";
import { Container } from "react-bootstrap";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import "./Quotes.css";

const Quotes = (props) => {
  console.log("Quotes", props.generalInfo && props.generalInfo.quote);
  const handleClick = () => {
    window.location.href = "#bookings";
  };
  const quotes = props.generalInfo && props.generalInfo.quote;
  return (
    <div className="describe-matha">
      <div
        className="layerImage"
        style={{
          backgroundImage: `url(${quotes && quotes.background})`,
        }}
      ></div>

      <Container className="aboutMatha">
        <div className="quote">
          <h2>{quotes && quotes.title}</h2>
          <p>{quotes && quotes.description}</p>
        </div>
        <div className="enquiryLink">
          <button
            type="button"
            className="enquiry"
            role="link"
            onClick={handleClick}
          >
            {quotes && quotes.button}
            <BiSolidRightArrowAlt />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Quotes;
