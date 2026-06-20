import { Brain, Sparkles, Cpu, Bot } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AIInnovation = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Machine Learning',
      description: 'Explore cutting-edge ML algorithms and neural network architectures powering the next generation of AI applications.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Generative AI',
      description: 'Witness breakthroughs in generative models creating art, music, code, and entirely new forms of content.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Neural Processing',
      description: 'Experience the power of neuromorphic computing and brain-inspired AI systems.',
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Agents',
      description: 'Discover autonomous AI agents capable of reasoning, planning, and executing complex tasks.',
    },
  ];

  return (
    <section
      id="ai-innovation"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] cyber-grid"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 section-reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-4">
            <Brain className="w-4 h-4 text-cyan-400" />
            <span className="font-cyber text-sm text-cyan-400">AI & MACHINE LEARNING</span>
          </div>
          <h2 className="font-cyber text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Step into the future with groundbreaking AI demonstrations, workshops, and competitions
            that showcase the limitless potential of artificial intelligence.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`cyber-card p-8 border-gradient rounded-xl bg-[#12121a]/50 backdrop-blur-sm section-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 p-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-cyber text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 loading-bar" />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '50+', label: 'AI Projects' },
            { value: '20+', label: 'Workshops' },
            { value: '10K+', label: 'Participants' },
            { value: '1M+', label: 'In Prize Pool' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 border-gradient rounded-lg section-reveal ${
                isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="font-cyber text-3xl font-bold text-cyan-400">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIInnovation;
