import { motion } from 'framer-motion';
import PixelBlast from './PixelBlast';
import BlurText from './BlurText';
import praneeshImage from '../assets/praneeshmain.jpg';
import keerthikImage from '../assets/Keerthik.jpg';
import dhanushImage from '../assets/Dhanush.jpg';
import sudharmaImage from '../assets/sudharma.jpg';

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
        {/* Developer Section Header */}
        <div className="mb-12 text-center">
          <BlurText
            text="Meet the Development Team"
            delay={140}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-white font-display"
          />
          <BlurText
            text="Crafted with passion by talented developers dedicated to financial security."
            delay={100}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* Developer Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <img
              src={praneeshImage}
              alt="Praneesh Shetty"
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-purple-500"
            />
            <div className="text-xl font-bold text-white mb-2">Praneesh Shetty</div>
            <div className="text-purple-400 text-sm font-semibold mb-2">Full-stack Developer</div>
            <div className="text-gray-400 text-center text-sm">Full-stack engineer specializing in Backend and design</div>
          </div>
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <img
              src={keerthikImage}
              alt="Keerthik D U"
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500"
            />
            <div className="text-xl font-bold text-white mb-2">Keerthik D U</div>
            <div className="text-blue-400 text-sm font-semibold mb-2">UI/UX and Research</div>
            <div className="text-gray-400 text-center text-sm">Creative designer focused on intuitive user experiences & modern interfaces</div>
          </div>
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <img
              src={dhanushImage}
              alt="Dhanush Vagman"
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-green-500"
            />
            <div className="text-xl font-bold text-white mb-2">Dhanush Vagman</div>
            <div className="text-green-400 text-sm font-semibold mb-2">Android Developer</div>
            <div className="text-gray-400 text-center text-sm">Specialized in Kotlin and Android studio</div>
          </div>
          <div className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <img
              src={sudharmaImage}
              alt="Sudharma S"
              className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-orange-500"
            />
            <div className="text-xl font-bold text-white mb-2">Sudharma S</div>
            <div className="text-orange-400 text-sm font-semibold mb-2">Machine Learning Engineer</div>
            <div className="text-gray-400 text-center text-sm">Specialised in AI/ML</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedCTA;