import React, {useEffect, useState} from "react";
import Button from "presentation/component/atom/Button";
import Input from "presentation/component/atom/Input";
// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

// style
import "./style.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData) {
      // menyimpan data ke localStorage
      localStorage.setItem('userData', JSON.stringify(formData));
      alert("Tautan mengatur kata sandi akan di kirim ke alamat email kamu");
    } else {
      // Kirim data pendaftaran ke seever atau melakukan tindakan lain sesuai kebutuhan
      alert('Kolom wajib di isi')
    }
  };

    // -- onScroll
    useEffect(() => {
      Aos.init();
    }, []);

  return (
    <div className="my-account__inner">
      <div className="my-account__register" data-aos="fade-right" data-aos-duration="2000">
        <h2 className="my-account__title">Register</h2>
        <form onSubmit={handleSubmit} className="my-account__form f-register">
          <div className="my-account__box">
            <div className="my-account__form-grup">
              <label htmlFor="email">Email address</label>
              <Input autoComplete="on" type="email" id="email" name="email" value={formData.email} onChange={handleChange} variant="primary" />
            </div>
            <div className="my-account__txt">
              <p className="my-account__txt-send">A link to set a new password will be sent to your email address.</p>
              <p className="my-account__desc">
                Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b> .
              </p>
            </div>
          </div>
        </form>
        <div className="my-account__btn">
          <Button type="submit" variant="secondary btn-register" onClick={handleSubmit}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
