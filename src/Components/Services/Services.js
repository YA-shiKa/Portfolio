import React from "react";
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
            As a Computer Science student and AI enthusiast, I specialize in building intelligent, scalable systems. My work spans developing AI-powered solutions, real-time applications, and full-stack web platforms that blend advanced models with user-centric development.
          </p>
          {/* Updated button */}
          <a href="#contact">
            <button>Get in Touch</button>
          </a>
        </div>

        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Full-Stack Web Development</h3>
              <p>
                I build intuitive, responsive web applications using the MERN stack, incorporating AI models, payment systems, and real-time functionalities. I've developed platforms like ContentCrafter AI and ExpenseFlow, focusing on seamless user experiences and scalable architectures.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-brain"></i>
            <div className="item-desc">
              <h3>AI & Machine Learning</h3>
              <p>
                I design AI-driven solutions using advanced techniques like fine-tuned LLMs (e.g., Mistral 7B), RAG pipelines, and FAISS for semantic search and context retrieval. From chatbots to predictive models, I deliver high-performance, scalable AI solutions.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-database"></i>
            <div className="item-desc">
              <h3>Data Science & Analytics</h3>
              <p>
                I create intelligent systems that analyze and extract insights from complex data sets. Using tools like TensorFlow, PyTorch, and Hugging Face, I work on tasks such as fraud detection, sentiment analysis, and building custom NLP models for dynamic decision-making.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-mobile-alt"></i>
            <div className="item-desc">
              <h3>Real-Time Web Applications</h3>
              <p>
                I specialize in building real-time web applications using technologies like Socket.IO and WebSockets. My projects include live chat platforms like ConnectFlow and real-time collaboration tools, ensuring smooth synchronization across devices.
              </p>
            </div>
          </div>

          <div className="services-item">
            <i className="fa-solid fa-palette"></i>
            <div className="item-desc">
              <h3>UI/UX Design</h3>
              <p>
                I design engaging, user-centric interfaces using TailwindCSS and responsive design principles. My focus is on creating clean, intuitive, and aesthetic UI for web and AI-driven applications, ensuring seamless experiences across all devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
