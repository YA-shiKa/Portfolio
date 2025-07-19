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
                "AI/ML Developer 🤖",
                "Full Stack Engineer 🚀",
                "NLP + CV Enthusiast 🎥",
                "Open-Source Contributor 🛠️",
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
          Passionate about solving complex problems with a mix of AI, NLP, full-stack web tech, and system design—I thrive at the intersection of intelligent models and intuitive interfaces. Let’s connect and build something amazing!
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
