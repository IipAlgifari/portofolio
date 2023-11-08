import Contact from "presentation/component/molecule/Contact";
import React from "react";

import './style.scss';

const SectionContact = () => {

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__head">
          <h2 className="contact__title">Get In Touch With Us</h2>
          <p className="contact__description">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="contact__body">
          <div className="contact__info">
            <div className="contact__address">
              <h4 className="contact__address__title">Address</h4>
              <p className="contact__address__desc">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            <div className="contact__phone">
              <h4 className="contact__phone__title">Phone</h4>
              <p className="contact__phone-mobile">Mobile: +(84) 546-6789</p>
              <p className="contact__phone-hotline">Hotline: +(84) 546-6789</p>
            </div>
            <div className="contact__working-time">
                  <h4 className="contact__working-time__title">Working Time</h4>
                  <p className="contact__working-time__info">Monday-Friday: 9:00 - 22:00</p>
                  <p className="contact__working-time__info">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
          <div className="contact__formulir">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
