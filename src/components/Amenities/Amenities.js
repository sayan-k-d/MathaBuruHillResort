import React from "react";
import ServiceCards from "./ServiceCards";
import "./Amenities.css";
const Amenities = (props) => {
  console.log("Amenities", props.generalInfo && props.generalInfo.amenities);
  const amenities = props.generalInfo && props.generalInfo.amenities;
  return (
    <div className="amenities" id="amenities">
      <div class="container section">
        <div class="title">
          <h1>{amenities && amenities.title}</h1>
          <p>{amenities && amenities.description}</p>
        </div>

        <ServiceCards services={amenities && amenities.services} />
      </div>
    </div>
  );
};

export default Amenities;
