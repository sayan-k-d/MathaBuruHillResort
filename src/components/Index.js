import React from "react";
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";
import Amenities from "./Amenities/Amenities";
import Quote from "./Quote/Quotes";
import Gallery from "./Gallery/Gallery";
import Rooms from "./Rooms/Rooms";
import Location from "./Location/Location";
import ContactUs from "./ContactUs/ContactUs";
import Footer from "./Footer/Footer";
import "./style.scss";
const Index = (props) => {
  return (
    <>
      <Banner generalInfo={props.serverData ? props.serverData : null} />
      <AboutUs generalInfo={props.serverData ? props.serverData : null} />
      <Amenities generalInfo={props.serverData ? props.serverData : null} />
      <Quote generalInfo={props.serverData ? props.serverData : null} />
      <Gallery generalInfo={props.serverData ? props.serverData : null} />
      <Rooms generalInfo={props.serverData ? props.serverData : null} />
      <Location generalInfo={props.serverData ? props.serverData : null} />
      <ContactUs generalInfo={props.serverData ? props.serverData : null} />
      <Footer generalInfo={props.serverData ? props.serverData : null} />
    </>
  );
};

export default Index;
