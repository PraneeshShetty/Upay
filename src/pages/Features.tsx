import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  LanguageIcon,
  SpeakerWaveIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const coreFeatures = [
    {
      icon: DevicePhoneMobileIcon,
      title: 'AI Trust Scoring Engine',
      description: 'Real-time analysis of 50+ data points to generate instant trust scores',
      features: [
        'Behavioral pattern recognition',
        'Velocity checking',
        'Geolocation analysis',
        'Social graph trust mapping'
      ],
      demo: 'Interactive trust score calculator'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'SMS & Call Guardian',
      description: 'AI-powered protection against fraudulent communications',
      features: [
        'NLP-based scam detection',
        'Real-time message scanning',
        'Community-sourced fraud database',
        'Automated call screening'
      ],
      demo: 'Live message analysis'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice-First Interface',
      description: 'Navigate and interact using voice commands in your preferred language',
      features: [
        '10+ Indian languages',
        'Voice alerts and warnings',
        'Accessibility optimized',
        'Offline capability'
      ],
      demo: 'Voice command simulator'
    }
  ];

  const ruralFeatures = [
    {
      icon: LanguageIcon,
      title: 'Vernacular Support',
      description: 'Complete localization for India\'s linguistic diversity',
      languages: ['Hindi', 'Bengali', 'Telugu', 'Marathi', 'Tamil', 'Gujarati', 'Kannada', 'Malayalam', 'Punjabi', 'Odia']
    },
    {
      icon: AcademicCapIcon,
      title: 'Financial Literacy Training',
      description: 'Interactive learning modules to build digital payment awareness',
      modules: ['Basic UPI Safety', 'Fraud Recognition', 'Safe Transaction Practices', 'Emergency Response']
    },
    {
      icon: SpeakerWaveIcon,
      title: 'Audio-First Design',
      description: 'Optimized for users with low literacy or visual impairments',
      accessibility: ['Voice navigation', 'Audio feedback', 'Simple UI', 'Large text options']
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-bold text-white sm:text-5xl"
          >
            Complete Protection Suite
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            UPay combines multiple layers of AI-powered protection to create the most comprehensive 
            UPI fraud prevention system designed specifically for India.
          </motion.p>
        </div>

        {/* Core Features */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-center mb-12"
          >
            Core Protection Features
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <button className="btn-primary w-full text-sm">
                  Try {feature.demo}
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rural-First Features */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-center mb-12"
          >
            Built for Rural India
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ruralFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                
                <div className="space-y-3">
                  {feature.languages && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Supported Languages:</h4>
                      <div className="flex flex-wrap gap-2">
                        {feature.languages.map((lang, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {feature.modules && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Training Modules:</h4>
                      <ul className="space-y-1">
                        {feature.modules.map((module, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                            {module}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {feature.accessibility && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Accessibility Features:</h4>
                      <ul className="space-y-1">
                        {feature.accessibility.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Experience UPay Live
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Try our interactive demo to see how UPay protects your transactions in real-time. 
              Test the AI engine, voice commands, and fraud detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Launch Interactive Demo
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-200">
                Schedule Live Demo
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Features;