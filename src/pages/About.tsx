import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      title: 'Privacy First',
      description: 'All AI processing happens on-device. Your financial data never leaves your phone.',
      icon: '🔒'
    },
    {
      title: 'Rural Inclusion',
      description: 'Designed specifically for India\'s diverse linguistic and technological landscape.',
      icon: '🌾'
    },
    {
      title: 'Accessibility',
      description: 'Voice-first interface ensuring everyone can protect their digital payments.',
      icon: '♿'
    },
    {
      title: 'Community Driven',
      description: 'Powered by collective intelligence and community-sourced fraud detection.',
      icon: '🤝'
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
            About UPay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Born from a hackathon idea to protect India's digital payment ecosystem, 
            UPay is on a mission to make UPI fraud a thing of the past.
          </motion.p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-blue-100 mb-8">
                To democratize digital payment security by making advanced fraud protection 
                accessible to every Indian, regardless of their technical literacy or economic background.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100M+</div>
                  <div className="text-blue-200">Users to Protect</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-blue-200">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">₹0</div>
                  <div className="text-blue-200">Cost for Rural Users</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-display font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;