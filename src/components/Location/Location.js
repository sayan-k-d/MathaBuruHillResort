import React from "react";

import "./Location.css";

const Location = (props) => {
  console.log("Location", props.generalInfo && props.generalInfo.location);
  const location = props.generalInfo && props.generalInfo.location;

  return (
    <div className="location">
      <div className="container section">
        <div className="location-title">
          <h1>{location && location.title}</h1>
          <p>{location && location.address}</p>
        </div>
        <div className="map" style={{ width: `600`, height: `450` }}>
          <iframe
            src={location && location.map}
            width="600"
            height="450"
            style={{ border: `0` }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <footer>
            &copy; 2024 Google Maps on Website. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Location;
