import { motion } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ClockIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline';

const FeaturesOverview = () => {
  const features = [
    {
      icon: ShieldCheckIcon,
      title: 'AI Trust Scoring',
      description: 'Real-time risk analysis for every transaction with a 0-100 trust score',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'SMS & Call Guardian',
      description: 'AI-powered scanning of suspicious messages and call protection',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Voice-First Interface',
      description: 'Navigate and get alerts in 10+ Indian languages with voice commands',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Behavioral Analysis',
      description: 'Learn your patterns and flag unusual transactions instantly',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: ClockIcon,
      title: 'Cooling-Off Period',
      description: 'Mandatory 10-minute pause for high-risk transactions to prevent impulse fraud',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: GlobeAsiaAustraliaIcon,
      title: 'Rural-First Design',
      description: 'Built specifically for India\'s diverse user base with accessibility in mind',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-gray-900 sm:text-4xl"
          >
            Complete Digital Protection Suite
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
          >
            UPay combines multiple layers of AI-powered protection to create an 
            impenetrable shield against UPI fraud.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="card group-hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-display font-bold mb-4">
              Ready to Experience Ultimate UPI Security?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already protected their digital payments with UPay's 
              advanced AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Try Interactive Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
                Download App
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesOverview;