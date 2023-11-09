import React from "react";
import "./style.scss";
import Input from "presentation/component/atom/Input";
import Button from "presentation/component/atom/Button";

const Contact = () => {
  return (
    <div className="contact__form-body">
      <form action="" className="contact__form">
        <div className="contact__form-group">
          <label htmlFor="yn">Your Name</label>
          <Input id="yn" variant="secondary" onChange="onchange" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Email address</label>
          <Input id="email" variant="secondary" onChange="onChange" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="subject">Subject</label>
          <Input id="subject" variant="primary" onChange="onChange" />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" variant="secondary" onChange="onChange" rows="4" />
        </div>
        <div className="contact__btn">
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
