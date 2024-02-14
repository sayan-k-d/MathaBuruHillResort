import React from "react";
import "./Footer.css";

import NavigationBar from "../Nav/NavigationBar";
import { FaFacebook, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";

const Footer = (props) => {
  const navItems = props.generalInfo && props.generalInfo.nav;
  const contacts = props.generalInfo && props.generalInfo.contacts;
  const logo = props.generalInfo && props.generalInfo.banner;
  const contactsData = contacts && Object.values(contacts);

  const socialRoutes = [
    {
      icon: <FaFacebook />,
      route:
        "https://www.facebook.com/profile.php?id=100076116884126&mibextid=dGKdO6",
    },
    {
      icon: <FaInstagram />,
      route:
        "https://www.instagram.com/mathaburuhillresort?igsh=eGQzNnE4Z29tbnVx",
    },
    {
      icon: <FaWhatsapp />,
      route: "tel:7384804148",
    },
    {
      icon: <FaGoogle />,
      route: "https://www.google.com/travel/hotels/s/UwwmCFMV5ZsLmfwF8",
    },
  ];

  return (
    <div className="footer">
      <div className="container section">
        <div className="footer-content">
          <div className="logo">
            <a href="#">
              <img src={`${logo && logo.logo}`} alt="logo" />
            </a>
          </div>
          <NavigationBar generalInfo={navItems} sectionFor={"FOOTER"} />
          <NavigationBar
            generalInfo={socialRoutes}
            sectionFor={"FOOTER"}
            className="social-icons"
          />
          <NavigationBar
            generalInfo={contactsData}
            sectionFor={"FOOTER"}
            className={"contacts"}
          />
        </div>
      </div>
      <hr />
      <small>
        Copyright &copy; 2024 Matha Buru Hill Eco Resort, All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
