import { motion } from 'framer-motion';
import BlurText from './BlurText';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-blue-700 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BlurText
            text="Strategic Partnership Opportunities"
            delay={125}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
          />
          <BlurText
            text="Establish enterprise-level security partnerships for institutional deployment."
            delay={90}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          >
            <div className="flex-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 whitespace-nowrap">
              Get Early Access
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100K+</div>
              <div className="text-blue-100">Users Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">₹50M+</div>
              <div className="text-blue-100">Fraud Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-100">Languages Supported</div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-sm text-blue-200"
          >
            ✓ Free for first 10,000 users • ✓ Works with all UPI apps • ✓ Privacy guaranteed
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;