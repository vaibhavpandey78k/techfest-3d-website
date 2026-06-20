import { ChevronDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById('ai-innovation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js background */}
      <ThreeScene />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        {/* Date badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8 animate-pulse-neon">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-cyber text-sm text-cyan-400">December 17-19, 2026</span>
        </div>

        {/* Main title */}
        <h1 className="font-cyber text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-glow-blue">
            TECHFEST
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mt-4">
            IIT BOMBAY
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Asia's Largest Science and Technology Festival
          <br />
          <span className="text-cyan-400 font-cyber">Innovate. Create. Inspire.</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {[
            { value: '175K+', label: 'Visitors' },
            { value: '500+', label: 'Projects' },
            { value: '100+', label: 'Events' },
            { value: '25+', label: 'Years' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 border-gradient rounded-lg bg-[#12121a]/50 backdrop-blur-sm"
            >
              <div className="font-cyber text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="cyber-button text-base">
            Register Now
          </button>
          <button className="cyber-button text-base" style={{ borderColor: '#b300ff', color: '#b300ff' }}>
            Explore Events
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
};

export default Hero;
