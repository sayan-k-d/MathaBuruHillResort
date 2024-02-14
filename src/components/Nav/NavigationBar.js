import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./NavigationBar.css";

const NavigationBar = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleMenuClick = () => {
    setIsNavOpen(false);
  };
  const navigationArray = [
    "#about-us",
    "#amenities",
    "#gallery",
    "#packages",
    "#bookings",
  ];
  console.log(props.generalInfo);
  if (props.sectionFor && props.sectionFor === "FOOTER") {
    return (
      <Nav className={`mx-auto mb-2 mb-lg-0 menu`}>
        {props.generalInfo &&
          props.generalInfo.map((item, index) => (
            <Nav.Item className={props.className && props.className}>
              <Nav.Link
                href={item.route != null ? item.route : navigationArray[index]}
                className={`underline-animate active navLink`}
                key={index.toString()}
                target={item.route && "_blank"}
                onClick={props.className !== "contacts" && handleMenuClick}
                disabled={props.className === "contacts" && true}
              >
                {item.icon ? item.icon : item}
              </Nav.Link>
            </Nav.Item>
          ))}
      </Nav>
    );
  } else {
    return (
      <div className="togglerMenu">
        <Navbar.Toggle
          aria-expanded="false"
          aria-label="Toggle navigation"
          aria-controls="navbarSupportedContent"
          onClick={toggleNav}
          ref={navbarRef}
        />
        <Navbar.Collapse
          id="navbarSupportedContent"
          className={isNavOpen ? "show" : ""}
        >
          <Nav className={`mx-auto mb-2 mb-lg-0 menu`}>
            {props.generalInfo &&
              props.generalInfo.map((item, index) => (
                <Nav.Item>
                  <Nav.Link
                    href={navigationArray[index]}
                    className={`underline-animate active navLink`}
                    key={index.toString()}
                    onClick={handleMenuClick}
                  >
                    {item}
                  </Nav.Link>
                </Nav.Item>
              ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    );
  }
};

export default NavigationBar;
