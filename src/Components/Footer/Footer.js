import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="logo" />
      </div>

      {/* copyright */}
      <div className="footer-cpyright">
        <p>© 2025 Maligi Yashika. All Rights Reserved.</p>
      </div>

      {/* social */}
      <ul className="footer-social-media">
        <li>
          <a href="https://github.com/YA-shiKa">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a href="mailto:myashika2005@gmail.com">
            <i className="fa-brands fa-google"></i>
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/myleetcode2005/">
            <i className="fa-solid fa-laptop-code"></i> {/* Updated LeetCode Icon */}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
