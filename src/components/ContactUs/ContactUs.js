import React from "react";
import "./ContactUs.css";

import ContactForm from "./ContactForm";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const ContactUs = (props) => {
  console.log(
    "Contact Us",
    props.generalInfo && props.generalInfo.contactUs,
    props.generalInfo && props.generalInfo.contacts
  );
  const contactUs = props.generalInfo && props.generalInfo.contactUs;
  const contacts = props.generalInfo && props.generalInfo.contacts;

  return (
    <div className="queries" id="bookings">
      <div className="container section">
        <div className="form-container">
          <ContactForm />
          <div className="query-title">
            <h1>{contactUs && contactUs.title}</h1>
            <p>{contactUs && contactUs.description}</p>
            <div className="divider-with-text">
              <div className="divider"></div>
              <span className="text">OR</span>
              <div className="divider"></div>
            </div>
            <a
              href={`tel:${contacts && contacts.mobile}`}
              className="btn btn-lg btn-warning"
            >
              {contactUs && contactUs.button}
              <BiSolidRightArrowAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
