import Branch from "./Components/Branch";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GetStarted from "./Components/GetStarted";
import Hero from "./Components/Hero";
import OurValue from "./Components/OurValue";
import Residencies from "./Components/Residencies";
import ServiceContext from "./Components/ServiceContext/ServiceContext";

function App() {
  return (
    <ServiceContext>
      <Hero />
      <Branch />
      <Residencies />
      <OurValue />
      <Contact />
      <GetStarted />
      <Footer />
    </ServiceContext>
  );
}

export default App;
