import React, { useState } from "react";
import { Link } from "react-router-dom";

//component 
import Button from "presentation/component/atom/Button";

// style
import "./style.scss";

const SectionLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    // Validasi input pengguna
    if (!email || !password) {
      alert('Isi semua bidang.');
      return;
    }
    // if (rememberMe) {
    //   // Simpan token otentikasi ke localStorage
    //   const authToken = 'token_disini';
    //   localStorage.setItem('authToken', authToken);
    // }
  };

  return (
    <div className="login">
      <div className="container">
        <div className="login__wrapper">
          <h2 className="login__title">Log In</h2>
          <div className="login__box">
            <form className="login__form">
              <div>
                <p >user Email or email address</p>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <p>Password</p>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="">
                <label>
                  <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                  Remember Me
                </label>
              </div>
            </form>
            <div className="login__btn">
              <Button type="button" onClick={handleLogin} variant="secondary">
                Log In
              </Button>
              <Link>lost Your Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionLogin;
