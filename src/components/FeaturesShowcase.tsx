import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  BoltIcon, 
  CpuChipIcon, 
  GlobeAltIcon,
  SparklesIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const FeaturesShowcase = () => {
  const features = [
    {
      icon: BoltIcon,
      title: "Real-time Detection",
      description: "AI-powered fraud detection that analyzes transactions in under 100ms",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: ShieldCheckIcon,
      title: "Advanced Protection",
      description: "Multi-layered security with behavioral analysis and risk scoring",
      gradient: "from-green-400 to-blue-500"
    },
    {
      icon: CpuChipIcon,
      title: "Smart Analytics",
      description: "Machine learning algorithms that adapt to new fraud patterns",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Universal Coverage",
      description: "Works with all UPI apps and supports 10+ Indian languages",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: SparklesIcon,
      title: "Instant Alerts",
      description: "Immediate notifications for suspicious activities and fraud attempts",
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: EyeIcon,
      title: "Smart Monitoring",
      description: "24/7 transaction monitoring with adaptive learning capabilities",
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Section Header */}
        <div className="text-center mb-16">
          <BlurText
            text="Advanced Protection Suite"
            delay={120}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-display"
          />
          <BlurText
            text="Next-generation fraud prevention powered by machine learning and behavioral analytics."
            delay={90}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
          >
            <span className="relative z-10">Explore All Features</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;