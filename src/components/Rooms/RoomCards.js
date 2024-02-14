import React, { useState } from "react";
import { Image } from "react-bootstrap";
import LightBox from "../LightBox/LightBox";

const RoomCards = (props) => {
  const [selectedRoom, setSelectedRoom] = useState([]);
  const selectedPackage = (rooms, index) => {
    setSelectedRoom(rooms);
  };
  const closeFullscreen = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="room-cards row">
      {props.rooms &&
        props.rooms.map((room, index) => (
          <div
            className="col-lg-6 col-md-12 col-sm-12"
            key={index.toString()}
            onClick={() => {
              selectedPackage(room.images, index);
            }}
          >
            <div
              className="card mb-5"
              // style={{ maxWidth: `540px` }}
              onclick="viewRooms(this)"
            >
              <div className="row g-0">
                <div className="col-md-6 image-area">
                  <Image
                    src={`${room && room.icon}`}
                    className="room-images img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{room && room.title}</h5>
                    <p className="card-text">{room && room.description}</p>
                    <p className="service-icons">
                      {room &&
                        room.serviceIcons.length > 0 &&
                        room.serviceIcons.map((icon, index) => (
                          <Image
                            src={`${icon && icon}`}
                            alt={icon}
                            key={index.toString()}
                          />
                        ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      {selectedRoom && selectedRoom.length > 0 && (
        <LightBox
          selectedImage={selectedRoom}
          closeFullscreen={closeFullscreen}
        />
      )}
    </div>
  );
};

export default RoomCards;
