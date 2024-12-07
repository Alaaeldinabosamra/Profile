import "./App.css";
import VideoCarousel from "./sections/VideoCarousel.jsx";
import WorkExperience from "./sections/Experience.jsx";
import Navbar from "./sections/Navbar.jsx";
import Geine from "./sections/Genie.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Particle from "./components/Particle.jsx";
function App() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <VideoCarousel />
      <Geine />
    </main>
  );
}

export default App;
