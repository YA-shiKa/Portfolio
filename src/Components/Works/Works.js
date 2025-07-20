import React from "react";
import ReactTyped from "react-typed";
import "./Works.css";
import w1 from "../../assets/1.png";
import w2 from "../../assets/w2.jpg";
import w3 from "../../assets/w3.jpg";
import w4 from "../../assets/w4.jpg";
import w5 from "../../assets/w5.jpg";
import w6 from "../../assets/w6.jpg";

const Works = () => {
  return (
    <div className="works-container">
      <h1>My Recent Works</h1>
      <div className="works-list-container">
        <div className="works-item">
          <a href="https://github.com/YA-shiKa/Finance-Assistant-AI" target="_blank" rel="noopener noreferrer">
            <img src={w1} alt="work1" />
          </a>
        </div>
        <div className="works-item">
          <a href="https://github.com/YA-shiKa/mern-ai-content-generator" target="_blank" rel="noopener noreferrer">
            <img src={w2} alt="work2" />
          </a>
        </div>
        <div className="works-item">
          <a href="https://github.com/YA-shiKa/mern-expense-tracker" target="_blank" rel="noopener noreferrer">
            <img src={w3} alt="work3" />
          </a>
        </div>
        <div className="works-item">
          <a href="https://github.com/YA-shiKa/mern-chat-app" target="_blank" rel="noopener noreferrer">
            <img src={w4} alt="work4" />
          </a>
        </div>
        <div className="works-item">
          <a href="https://github.com/YA-shiKa/player-reid-tracking" target="_blank" rel="noopener noreferrer">
            <img src={w5} alt="work5" />
          </a>
        </div>
        <div className="works-item">
          <a href="https://github.com/YA-shiKa/CodeCraft-AI" target="_blank" rel="noopener noreferrer">
            <img src={w6} alt="work6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
