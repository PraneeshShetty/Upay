import { motion } from 'framer-motion';
import { ShieldCheckIcon, ArrowTrendingUpIcon, UserGroupIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const Statistics = () => {
  const stats = [
    {
      icon: ArrowTrendingUpIcon,
      number: '₹8.26 Trillion',
      description: 'UPI Transaction Volume (2023)',
      highlight: 'Growing 50% YoY',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: ExclamationTriangleIcon,
      number: '₹2,145 Crore',
      description: 'Digital Fraud Losses (2023)',
      highlight: 'Increasing every year',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: UserGroupIcon,
      number: '40M+',
      description: 'Rural UPI Users',
      highlight: 'Most vulnerable',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: ShieldCheckIcon,
      number: '99.9%',
      description: 'UPay Detection Rate',
      highlight: 'AI-Powered',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <div className="bg-black py-20 sm:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Section Header */}
        <div className="text-center mb-12">
          <BlurText
            text="Industry Security Metrics"
            delay={130}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-display"
          />
          <BlurText
            text="Critical data revealing the urgent need for advanced fraud prevention systems."
            delay={95}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 text-center">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300"
                >
                  {stat.number}
                </motion.div>
                
                {/* Description */}
                <div className="text-gray-300 font-medium mb-4 leading-relaxed">
                  {stat.description}
                </div>
                
                {/* Highlight */}
                <div className={`text-sm px-4 py-2 rounded-full inline-block font-semibold ${
                  index === 3 
                    ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                  {stat.highlight}
                </div>
                
                {/* Hover effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Every 3 minutes, someone in India falls victim to UPI fraud
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
              Rural users are 3x more likely to be targeted due to lower digital literacy. 
              UPay changes this equation with AI-powered, voice-first protection.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              See How UPay Helps
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;