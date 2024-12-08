import "./App.css";
import VideoCarousel from "./sections/VideoCarousel.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Navbar from "./sections/Navbar.jsx";
import Geine from "./sections/Genie.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Particle from "./components/Particle.jsx";
import Projects from "./sections/Projects.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <div className="hidden lg:block">
        <Particle />
      </div>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <VideoCarousel />
      <Geine />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
