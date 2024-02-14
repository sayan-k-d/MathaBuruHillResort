import React from "react";
import "./Rooms.css";

import RoomCards from "./RoomCards";
const Rooms = (props) => {
  console.log("Rooms", props.generalInfo && props.generalInfo.packages);
  const rooms = props.generalInfo && props.generalInfo.packages;
  console.log(rooms);
  return (
    <div className="packages" id="packages">
      <div className="container section">
        <div className="title">
          <h1>{rooms && rooms.title}</h1>
          <p>{rooms && rooms.description}</p>
        </div>
        <RoomCards rooms={rooms && rooms.rooms} />
      </div>
    </div>
  );
};

export default Rooms;
