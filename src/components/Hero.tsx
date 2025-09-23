import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import PixelBlast from './PixelBlast';
import BlurText from './BlurText';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, speak } = useLanguage();

  const handleGetStarted = () => {
    speak(t('heroTitle'));
    // Navigate to learning section
  };

  const handleWatchDemo = () => {
    speak(t('heroDescription'));
    // Play demo video or navigate to demo
  };
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* PixelBlast animated background */}
      <div className="absolute inset-0 z-0">
        <PixelBlast
          variant="circle"
          pixelSize={4}
          color="#6366F1"
          patternScale={2.5}
          patternDensity={0.8}
          pixelSizeJitter={0.3}
          enableRipples
          rippleSpeed={0.5}
          rippleThickness={0.15}
          rippleIntensityScale={2.0}
          liquid
          liquidStrength={0.08}
          liquidRadius={1.5}
          liquidWobbleSpeed={3}
          speed={0.4}
          edgeFade={0.3}
          transparent
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-black/40 z-10"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-20">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-4 h-4 bg-blue-500/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [10, -10, 10], rotate: [0, -3, 0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-16 w-6 h-6 bg-purple-500/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [-5, 15, -5], x: [-5, 5, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-indigo-400/50 rounded-full blur-sm"
        />
      </div>

      <div className="relative z-30 flex items-center justify-center min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Professional Animated Heading */}
            <div className="mb-12">
              <BlurText
                text={t('heroTitle')}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white font-display"
              />
              <BlurText
                text={t('heroDescription')}
                delay={80}
                animateBy="words"
                direction="bottom"
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              />
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={handleGetStarted}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-full shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  {t('getProtected')}
                  <ArrowRightIcon className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              
              <motion.button
                onClick={handleWatchDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold text-lg rounded-full hover:border-indigo-400 hover:text-white transition-all duration-300"
              >
                <PlayIcon className="mr-3 h-6 w-6 group-hover:text-indigo-400 transition-colors" />
                {t('watchDemo')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;