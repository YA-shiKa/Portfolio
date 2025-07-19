import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../../assets/profile.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <h1>Hi! I’m</h1>
        <h2 className="fullname">Maligi Yashika</h2>
        <h2>
          I’m a{" "}
          <span style={{ color: "#0bc5ea", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Full Stack Developer 🚀",
                "AI & ML Enthusiast 🤖",
                "Web Developer 💻",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p>
          Passionate about building innovative solutions using cutting-edge
          technologies like AI, React, and machine learning. Let's connect and
          build something amazing!
        </p>

        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i className="fa-brands fa-cc-visa"></i>
          <i className="fa-brands fa-cc-mastercard"></i>
          <i className="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      <div className="profile-img-container">
        <img src={profileImg} alt="Maligi Yashika" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
