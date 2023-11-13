import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "presentation/component/atom/Button";
import Input from "presentation/component/atom/Input";
// -- onScroll
import Aos from "aos";
import "aos/dist/aos.css";

// style
import "./style.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validasi alamat email menggunakan (regex)
  const validateEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };
  // validate password menggunakan regex
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    passwordRegex.test(password);
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.email && !formData.password) {
      setEmailError(" Email Tidak boleh kosong");
      setPassError("Password tidak boleh kosong");
    } else if (!validateEmail(formData.email)) {
      alert("Alamat email tidak valid");
    } else if (!validatePassword(formData.password)) {
      alert("password tidak");
    } else {
      // menyimpan data di localStorage
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem("rememberMe");
      }
      // Jika validasi lolos
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Berhasil Login. Silakan Mulai belanja.");
      navigate("/");
    }
  };

  // setRememberMe
  useEffect(() => {
    const rememberMeStatus = localStorage.getItem("rememberMe");
    if (rememberMeStatus === "true") {
      setRememberMe(false);
    }
  }, []);

  // -- onScroll
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-account__inner">
      <div className="my-account__login" data-aos="fade-left" data-aos-duration="2000" >
        <div className="my-account__box">
          <h2 className="my-account__title" >Login</h2>
          <form action="/" className="my-account__form f-login" >
            <div className="my-account__form-grup">
              <label htmlFor="femail">Username or Email address</label>
              <Input autoFocus="true" autoComplete="off" id="femail" type="email" name="email" value={formData.email} onChange={handleChange} variant="primary" />
              {emailError && <div className="error-message">{emailError}</div> }
            </div>
            <div className="my-account__form-grup">
              <label htmlFor="pwd">Password</label>
              <Input id="pwd" type="password" name="password" value={formData.password} onChange={handleChange} variant="primary" />
              {passError && <div className="error-message">{passError}</div> }
            </div>
            <div className="my-account__form-grup">
              <label className="label-checkbox">
                <Input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} variant="checkbox" />
                Remember Me
              </label>
            </div>
          </form>
          <div className="my-account__btn">
            <Button type="button" onClick={handleLogin} variant="secondary btn-login">
              Log In
            </Button>
            <Link to="/" className="link-lost-password">
              Lost Your Password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
