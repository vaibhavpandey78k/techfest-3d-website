import { Calendar, MapPin, Users, Trophy, Lightbulb, Music } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const TechfestExperience = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const experiences = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Competitions',
      stat: '100+',
      description: 'National and international competitions across multiple domains.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Exhibitions',
      stat: '200+',
      description: 'Live demonstrations and interactive technology showcases.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Workshops',
      stat: '50+',
      description: 'Hands-on learning sessions led by industry experts.',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'Events',
      stat: '30+',
      description: 'Talks, panels, and performances throughout the festival.',
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-4">
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span className="font-cyber text-sm text-cyan-400">THE FESTIVAL</span>
          </div>
          <h2 className="font-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Techfest Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three days of innovation, learning, and unforgettable experiences.
            Join thousands of tech enthusiasts from around the world.
          </p>
        </div>

        {/* Event details */}
        <div className={`flex flex-wrap justify-center gap-6 mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#12121a] border border-cyan-500/20">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-xs text-gray-500">Date</p>
              <p className="font-cyber text-sm text-white">Dec 17-19, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#12121a] border border-purple-500/20">
            <MapPin className="w-5 h-5 text-purple-400" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="font-cyber text-sm text-white">IIT Bombay Campus</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#12121a] border border-cyan-500/20">
            <Users className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-xs text-gray-500">Expected</p>
              <p className="font-cyber text-sm text-white">175,000+ Visitors</p>
            </div>
          </div>
        </div>

        {/* Experience cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`cyber-card p-8 border-gradient rounded-xl bg-[#12121a]/50 backdrop-blur-sm text-center section-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-6">
                {exp.icon}
              </div>
              <div className="font-cyber text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {exp.stat}
              </div>
              <h3 className="font-cyber text-lg font-bold text-white mb-3">
                {exp.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className={`section-reveal ${isVisible ? 'visible' : ''}`}>
          <h3 className="font-cyber text-2xl font-bold text-center mb-8 text-white">
            Previous Editions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/8566476/pexels-photo-8566476.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/258082/pexels-photo-258082.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
            ].map((src, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group"
              >
                <img
                  src={src}
                  alt={`Techfest ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <p className="text-gray-400 mb-6">
            Be part of Asia's largest science and technology festival
          </p>
          <button className="cyber-button text-lg">
            Register for Techfest 2026
          </button>
        </div>
      </div>
    </section>
  );
};

export default TechfestExperience;
