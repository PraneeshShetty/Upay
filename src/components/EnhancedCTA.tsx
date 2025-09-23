import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import PixelBlast from './PixelBlast';
import BlurText from './BlurText';

const EnhancedCTA = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* PixelBlast background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="diamond"
          pixelSize={6}
          color="#8B5CF6"
          patternScale={3}
          patternDensity={0.6}
          pixelSizeJitter={0.4}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.12}
          rippleIntensityScale={1.8}
          liquid
          liquidStrength={0.06}
          liquidRadius={1.2}
          liquidWobbleSpeed={4}
          speed={0.3}
          edgeFade={0.4}
          transparent
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Professional Section Header */}
        <div className="mb-12 text-center">
          <BlurText
            text="Enterprise Implementation"
            delay={140}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white font-display"
          />
          <BlurText
            text="Deploy advanced fraud prevention technology with enterprise-grade support."
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-gray-400">Protected Users</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Detection Rate</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-white mb-2">₹500Cr+</div>
            <div className="text-gray-400">Fraud Prevented</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xl rounded-full shadow-2xl shadow-purple-500/25 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Start Protection Now
              <ArrowRightIcon className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  "linear-gradient(0deg, rgba(139, 92, 246, 0.5), rgba(219, 39, 119, 0.5))",
                  "linear-gradient(90deg, rgba(139, 92, 246, 0.5), rgba(219, 39, 119, 0.5))",
                  "linear-gradient(180deg, rgba(139, 92, 246, 0.5), rgba(219, 39, 119, 0.5))",
                  "linear-gradient(270deg, rgba(139, 92, 246, 0.5), rgba(219, 39, 119, 0.5))",
                  "linear-gradient(360deg, rgba(139, 92, 246, 0.5), rgba(219, 39, 119, 0.5))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center px-10 py-5 border-2 border-gray-600 text-gray-300 font-bold text-xl rounded-full hover:border-purple-400 hover:text-white transition-all duration-300"
          >
            <ShieldCheckIcon className="mr-3 h-6 w-6 group-hover:text-purple-400 transition-colors" />
            View Security Details
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>RBI Compliant</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Bank-Grade Security</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <span>24/7 Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCTA;