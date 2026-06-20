import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIInnovation from './components/AIInnovation';
import Robotics from './components/Robotics';
import FutureTechnology from './components/FutureTechnology';
import TechfestExperience from './components/TechfestExperience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <AIInnovation />
      <Robotics />
      <FutureTechnology />
      <TechfestExperience />
      <Footer />
    </div>
  );
}

export default App;
