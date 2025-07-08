import React from "react";
import ReactTyped from "react-typed";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        <div className="services-desc-container">
          <h1>
            My Expertise in <span>Technologies</span>
          </h1>
          <p>
            As a Computer Science student with hands-on experience in AI, Machine
            Learning, and Web Development, I specialize in creating innovative solutions
            across various domains. I focus on building secure, scalable, and user-friendly
            applications with cutting-edge technologies.
          </p>
          <button>Get in Touch</button>
        </div>

        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Full-Stack Web Development</h3>
              <p>
                Expertise in building responsive and scalable web applications using
                the MERN stack (MongoDB, Express.js, React.js, Node.js). I have built
                full-stack applications including ContentCrafter AI, using technologies
                like React.js, Tailwind CSS, and integrated services like Razorpay.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-brain"></i>
            <div className="item-desc">
              <h3>AI & Machine Learning</h3>
              <p>
                I design AI-driven solutions like Finance Assistant AI using LLMs,
                RAG-based systems, and FAISS for semantic search and context retrieval. 
                Additionally, I implement machine learning models with TensorFlow, PyTorch,
                and Hugging Face.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-users"></i>
            <div className="item-desc">
              <h3>Data Science & Analytics</h3>
              <p>
                I develop intelligent systems that analyze data and provide meaningful insights.
                My experience includes building a Smart Query system for natural language
                question-answering using the FLAN-T5 model and semantic chunking with
                sentence transformers.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-mobile-alt"></i>
            <div className="item-desc">
              <h3>UI/UX Design</h3>
              <p>
                I create intuitive, aesthetically pleasing, and user-friendly interfaces.
                With a focus on usability, I have designed interactive user interfaces for
                my AI-based projects using TailwindCSS and responsive design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
