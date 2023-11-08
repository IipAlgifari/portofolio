import React, { useState } from "react";
import "./style.scss";
import Input from "presentation/component/atom/Input";
import Button from "presentation/component/atom/Button";

const Contact = () => {
  const [formDataContact, setFormDataContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChangeContact = (e) => {
    const { nama, value } = e.target;
    setFormDataContact({ ...formDataContact, [nama]: value });
    console.log(setFormDataContact);
  };

  const handleSubmitContact = (e) => {
    e.preventDefault();
    console.log(handleSubmitContact);

    // Validasi formulir sebelum menyimpan ke localStorage
    if (!formDataContact.name || !formDataContact.email || !formDataContact.subject || !formDataContact.message) {
      setError("Please fill out all fields."); // Pesan kesalahan kustom
      return;
    }

    // Simpan data formulir ke localStorage
    localStorage.setItem("formDataContact", JSON.stringify(formDataContact));
    setSubmitted(true);
  };

  return (
    <div className="contact__form-body">
      {submitted ? (
        <p>Terima kasih, formulir Anda telah berhasil dikirim.</p>
      ) : (
        <form action="" className="contact__form">
          <div className="contact__form-group">
            <label htmlFor="yn">Your Name</label>
            <Input id="yn" variant="secondary" onChange={handleChangeContact} />
          </div>
          {/* <div className="contact__form-group">
            <label htmlFor="email">Email address</label>
            <Input id="email" variant="secondary"   onChange={handleChangeContact} required="required"/>
          </div>
          <div className="contact__form-group">
            <label htmlFor="subject">Subject</label>
            <Input id="subject" variant="primary"  onChange={handleChangeContact} required="required" />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" variant="secondary" onChange={handleChangeContact} rows="4" required="required" />
          </div> */}
          <div className="contact__btn">
            <Button variant="secondary" type="submit" onClick={handleSubmitContact}>
              Submit
            </Button>
          </div>
        </form>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Contact;
