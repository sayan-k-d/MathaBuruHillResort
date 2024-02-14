import React from "react";
import "../style.scss";
import { Container, Image, Button } from "react-bootstrap";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import NavigationBar from "../Nav/NavigationBar";
import "./Banner.css";

const Banner = (props) => {
  console.log("Bannerr", props.generalInfo && props.generalInfo.banner);
  const handleClick = () => {
    window.location.href = "#bookings";
  };
  const banner = props.generalInfo && props.generalInfo.banner;
  const navItems = props.generalInfo && props.generalInfo.nav;
  return (
    <div
      className="banner navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-body-tertiary"
      id="banner"
    >
      <div
        className="layerImage"
        style={{
          backgroundImage: `url(${banner && banner.background})`,
        }}
      ></div>

      <Container fluid className="containerFluid">
        <div className="logo">
          <Image
            src={`${banner && banner.logo}`}
            alt="logo"
            className="logoImage"
          />
        </div>
        <NavigationBar generalInfo={navItems} />
        <div className="pageTitle">
          <h1>{banner && banner.title}</h1>
          <p>{banner && banner.description}</p>
          <button
            type="button"
            className="enquiry"
            role="link"
            onClick={handleClick}
          >
            {banner && banner.button}
            <BiSolidRightArrowAlt />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
