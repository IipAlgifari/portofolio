import React, {useEffect} from "react";
import Contact from "presentation/component/molecule/Contact";
import { initAnimation } from "core/util/Animate/animate";

// icons
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidTimeFive } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

import "./style.scss";

const SectionContact = () => {
  // -- onScroll
  useEffect(() => {
    initAnimation();
  });

  return (
    <div className="contact">
      <div className="container">
        <div className="contact__head">
          <h2 className="contact__title" data-aos="fade-down" data-aos-duration="2000">Get In Touch With Us</h2>
          <p className="contact__description" data-aos="fade-up" data-aos-duration="2000">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className="contact__body">
          <div className="contact__info" data-aos="fade-right" data-aos-duration="2000">
            <div className="contact__box">
              <div className="contact__item address">
                <span>
                  <FaLocationDot />
                </span>
                <h4 className="contact__item__title">Address</h4>
                <p className="contact__item__desc">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
              <div className="contact__item phone">
                <span>
                  <FaPhoneAlt />
                </span>
                <h4 className="contact__item__title">Phone</h4>
                <p className="contact__item__desc">Mobile: +(84) 546-6789</p>
                <p className="contact__item__desc">Hotline: +(84) 546-6789</p>
              </div>
              <div className="contact__item times">
                <span>
                  <BiSolidTimeFive />
                </span>
                <h4 className="contact__item__title">Working Time</h4>
                <p className="contact__item__desc">Monday-Friday: 9:00 - 22:00</p>
                <p className="contact__item__desc">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="contact__formulir" data-aos="fade-left" data-aos-duration="2000">
            <Contact  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
