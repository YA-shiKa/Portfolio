//  import React from "react";
// import ReactTyped from "react-typed";
// import "./Navbar.css";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   return (
//     <nav>
//       <div className="nav-logo">
//         <img src={logo} alt="logo" />
//       </div>
//       <div className="nav-links">
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/">About</a>
//           </li>
//           <li>
//             <a href="/">Projects</a>
//           </li>
//           <li>
//             <a href="/">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
