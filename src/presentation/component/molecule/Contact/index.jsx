import React, {useEffect} from "react";
import { initAnimation } from "core/util/Animate/animate";
import "./style.scss";
import Input from "presentation/component/atom/Input";
import Button from "presentation/component/atom/Button";

const Contact = () => {
  // -- onScroll
  useEffect(() => {
    initAnimation();
  }, []);
  return (
    <div className="contact__form-body" data-aos="fade" data-aos-duration="2000">
      <form action="" className="contact__form">
        <div className="contact__form-group">
          <label htmlFor="yn">Your Name</label>
          <Input id="yn" variant="secondary " onChange="onchange" placeholder="Abc" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email address</label>
          <Input id="email" variant="secondary" onChange="onChange" placeholder="Abc@def.com" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="subject">Subject</label>
          <Input id="subject" variant="secondary" onChange="onChange" placeholder="This is an optional" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" variant="secondary" rows="4" wrap="hard" placeholder="Hi! i’d like to ask about" />
        </div>
        <div className="contact__btn">
          <Button variant="secondary btn-contact" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
