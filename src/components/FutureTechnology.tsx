import { Rocket, Satellite, Atom, Microscope, Wifi } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import InteractiveCube from './InteractiveCube';

const FutureTechnology = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const innovations = [
    {
      icon: <Rocket className="w-5 h-5" />,
      title: 'Space Tech',
      description: 'Private space exploration and satellite deployment technologies.',
    },
    {
      icon: <Atom className="w-5 h-5" />,
      title: 'Quantum Computing',
      description: 'Harness quantum mechanics for unprecedented computational power.',
    },
    {
      icon: <Microscope className="w-5 h-5" />,
      title: 'Biotechnology',
      description: 'CRISPR, gene editing, and the future of personalized medicine.',
    },
    {
      icon: <Satellite className="w-5 h-5" />,
      title: 'IoT Networks',
      description: 'Connected devices creating smart cities and autonomous systems.',
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: '6G & Beyond',
      description: 'Next-generation wireless connectivity enabling real-time everything.',
    },
  ];

  return (
    <section
      id="future-tech"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#12081a] to-[#0a0a0f] overflow-hidden"
    >
      {/* Background lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-4">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="font-cyber text-sm text-cyan-400">EMERGING TECHNOLOGIES</span>
              </div>
              <h2 className="font-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future Technology
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Explore the technologies that will define the next decade.
                From quantum leaps to space frontiers, witness innovations
                that seem straight out of science fiction.
              </p>
            </div>

            {/* Innovation list */}
            <div className="space-y-4">
              {innovations.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-lg bg-[#12121a]/50 border border-cyan-500/10 hover:border-cyan-500/30 transition-all section-reveal ${
                    isVisible ? 'visible' : ''
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-cyber text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Interactive Cube */}
          <div className={`flex items-center justify-center section-reveal ${isVisible ? 'visible' : ''}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl" />

              {/* Container */}
              <div className="relative p-8 rounded-2xl border-gradient bg-[#12121a]/30">
                <p className="text-center text-gray-500 text-sm mb-4 font-cyber">
                  INTERACTIVE 3D CUBE
                </p>
                <InteractiveCube />
                <p className="text-center text-cyan-400 text-xs mt-4 font-cyber animate-pulse-neon">
                  CLICK TO TRANSFORM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mt-24 section-reveal ${isVisible ? 'visible' : ''}`}>
          <h3 className="font-cyber text-2xl font-bold text-center mb-12 text-white">
            Technology Timeline
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            {/* Points */}
            <div className="relative flex justify-between items-center">
              {['2024', '2026', '2028', '2030', '2035'].map((year, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center"
                >
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    index <= 1 ? 'bg-cyan-400 border-cyan-400' : 'border-cyan-400/30'
                  } relative z-10`}>
                    {index <= 1 && (
                      <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping" />
                    )}
                  </div>
                  <span className="font-cyber text-sm text-gray-400 mt-3">{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureTechnology;
