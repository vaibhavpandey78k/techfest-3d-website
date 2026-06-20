import { Bot, Cpu, Eye, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Robotics = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const competitions = [
    {
      title: 'RoboWars',
      description: 'Heavy-duty combat robots clash in an arena of destruction. Engineering meets warfare.',
      participants: '200+ Teams',
      prize: '500K',
      image: 'https://images.pexels.com/photos/8566476/pexels-photo-8566476.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Drone Racing',
      description: 'High-speed autonomous drones navigate through complex obstacle courses.',
      participants: '150+ Teams',
      prize: '300K',
      image: 'https://images.pexels.com/photos/7125135/pexels-photo-7125135.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Humanoid Challenge',
      description: 'Bipedal robots compete in mobility and task completion challenges.',
      participants: '50+ Teams',
      prize: '400K',
      image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const technologies = [
    { icon: <Cpu className="w-6 h-6" />, name: 'Sensor Fusion' },
    { icon: <Eye className="w-6 h-6" />, name: 'Computer Vision' },
    { icon: <Zap className="w-6 h-6" />, name: 'Power Systems' },
    { icon: <Bot className="w-6 h-6" />, name: 'Motion Control' },
  ];

  return (
    <section
      id="robotics"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00f0ff 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 mb-4">
            <Bot className="w-4 h-4 text-purple-400" />
            <span className="font-cyber text-sm text-purple-400">ROBOTICS & AUTOMATION</span>
          </div>
          <h2 className="font-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Robotics Arena
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From combat bots to autonomous drones, experience the future of robotics
            with live demonstrations, competitions, and hands-on workshops.
          </p>
        </div>

        {/* Technology badges */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 hover:bg-purple-500/10 transition-colors cursor-default"
            >
              {tech.icon}
              <span className="font-cyber text-sm">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Competitions card */}
        <div className="grid md:grid-cols-3 gap-8">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className={`cyber-card group relative overflow-hidden rounded-xl border-gradient bg-[#12121a]/70 backdrop-blur-sm section-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={comp.image}
                  alt={comp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-cyber bg-purple-500/20 text-purple-400 border border-purple-500/30">
                    {comp.participants}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cyber text-xl font-bold text-white mb-2">
                  {comp.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {comp.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Prize Pool
                  </div>
                  <div className="font-cyber text-lg font-bold text-cyan-400">
                    Rs {comp.prize}
                  </div>
                </div>
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-gray-400 mb-6">
            Ready to build the future of robotics?
          </p>
          <button className="cyber-button" style={{ borderColor: '#b300ff', color: '#b300ff' }}>
            View All Competitions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Robotics;
