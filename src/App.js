import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Works from "./Components/Works/Works";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <Services />
      </div>
      <div id="projects">
        <Works />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
