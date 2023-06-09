import "./App.css";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
