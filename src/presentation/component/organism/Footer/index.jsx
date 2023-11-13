import { Link } from "react-router-dom";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__wrapper">
          <div className="site-footer__grid">
            <div className="site-footer__grid__item">
              <h3 className="site-footer__title">Furniro.</h3>
              <p className="site-footer__desc">
                400 University Drive Suite 200 Coral Gables,
                <br /> 33134 USA
              </p>
            </div>
            <div className="site-footer__grid__item">
              <div className="site-footer__inner">
                <p className="site-footer__title-small">Link</p>
                <ul className="site-footer__nav">
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link">Home</Link>
                  </li>
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link" to="/shop">
                      Shop
                    </Link>
                  </li>
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="site-footer__grid__item">
              <div className="site-footer__inner">
                <p className="site-footer__title-small">Help</p>
                <ul className="site-footer__nav">
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link" to="/">
                      Paymaent Options
                    </Link>
                  </li>
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="site-footer__nav__item">
                    <Link className="site-footer__nav__link" to="/">
                      Privacy Policies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="site-footer__grid__item">
              <div className="site-footer__form">
                <p className="site-footer__title-small">Newsletter</p>
                <label>
                  <input type="email" placeholder="Enter Your Email Address" autoComplete="off"  className="site-footer__form__input"/>
                </label>
                <button className="btn--subs">subscribe</button>
              </div>
            </div>
          </div>
          <div className="site-footer__copyright">
            <p className="site-footer__txt">2023 furino.All rights reverved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
