import { Link } from "react-router-dom";
import { initAnimation } from "core/util/Animate/animate";

import "./style.scss";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    initAnimation();
  }, []);
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__grid">
            <div className="footer__grid__item" data-aos="fade-right" data-aos-duration="2000" >
              <h3 className="footer__title">Furniro.</h3>
              <p className="footer__desc">
                400 University Drive Suite 200 Coral Gables,
                <br /> 33134 USA
              </p>
            </div>
            <div className="footer__box">
              <div className="footer__box__item" data-aos="fade-up" data-aos-duration="2000">
                <div className="footer__inner">
                  <p className="footer__title-small">Link</p>
                  <ul className="footer__nav">
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link">Home</Link>
                    </li>
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link" to="/shop">
                        Shop
                      </Link>
                    </li>
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__box__item" data-aos="fade-up" data-aos-duration="2000">
                <div className="footer__inner">
                  <p className="footer__title-small">Help</p>
                  <ul className="footer__nav">
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link" to="/">
                        Paymaent Options
                      </Link>
                    </li>
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="footer__nav__item">
                      <Link className="footer__nav__link" to="/">
                        Privacy Policies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__box__item" data-aos="fade-left" data-aos-duration="2000">
                <div className="footer__form">
                  <p className="footer__title-small">Newsletter</p>
                  <label>
                    <input type="email" placeholder="Enter Your Email" autoComplete="off" className="footer__form__input" />
                  </label>
                  <button className="btn--subs">subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright" data-aos="fade" data-aos-duration="2000">
            <p className="footer__txt">2023 furino.All rights reverved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
