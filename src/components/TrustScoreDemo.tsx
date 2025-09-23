import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheckIcon, 
  ExclamationTriangleIcon, 
  XCircleIcon,
  ChartBarIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import BlurText from './BlurText';

const TrustScoreDemo = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demoScenarios = [
    {
      id: 1,
      title: 'Safe Transaction',
      description: 'Regular payment to a trusted merchant',
      trustScore: 95,
      icon: ShieldCheckIcon,
      color: 'from-green-500 to-emerald-600',
      risk: 'Low',
      recommendation: 'Transaction approved instantly',
      factors: [
        'Verified merchant',
        'Regular transaction pattern',
        'Device recognized',
        'Location verified'
      ]
    },
    {
      id: 2,
      title: 'Medium Risk',
      description: 'First-time transaction to new recipient',
      trustScore: 67,
      icon: ExclamationTriangleIcon,
      color: 'from-yellow-500 to-orange-600',
      risk: 'Medium',
      recommendation: 'Additional verification recommended',
      factors: [
        'New recipient',
        'Large amount',
        'Device location changed',
        'Time outside normal pattern'
      ]
    },
    {
      id: 3,
      title: 'High Risk Blocked',
      description: 'Suspicious activity detected',
      trustScore: 23,
      icon: XCircleIcon,
      color: 'from-red-500 to-red-700',
      risk: 'High',
      recommendation: 'Transaction blocked for review',
      factors: [
        'Unknown device',
        'Unusual location',
        'Suspicious recipient',
        'Multiple failed attempts'
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setActiveDemo((prev) => (prev + 1) % demoScenarios.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-400 to-green-600';
    if (score >= 50) return 'from-yellow-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  const getCurrentScenario = () => demoScenarios[activeDemo];

  return (
    <div className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Section Header */}
        <div className="text-center mb-12">
          <BlurText
            text="AI Risk Assessment Platform"
            delay={110}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
          />
          <BlurText
            text="Real-time transaction analysis with intelligent risk scoring technology."
            delay={85}
            animateBy="words"
            direction="bottom"
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Demo Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-white">Real-Time Analysis</h3>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsRunning(!isRunning)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    isRunning 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {isRunning ? 'Stop Demo' : 'Start Demo'}
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDemo}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Scenario Info */}
                  <div className="text-center">
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${getCurrentScenario().color} mb-6`}>
                      {React.createElement(getCurrentScenario().icon, { className: "h-12 w-12 text-white" })}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4">
                      {getCurrentScenario().title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {getCurrentScenario().description}
                    </p>
                  </div>

                  {/* Trust Score Display */}
                  <div className="relative">
                    <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-600/30">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-300 font-medium">Trust Score</span>
                        <span className={`text-3xl font-bold ${getScoreColor(getCurrentScenario().trustScore)}`}>
                          {getCurrentScenario().trustScore}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${getCurrentScenario().trustScore}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-3 rounded-full bg-gradient-to-r ${getScoreGradient(getCurrentScenario().trustScore)}`}
                        />
                      </div>

                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Risk Level:</span>
                        <span className={`font-medium ${
                          getCurrentScenario().risk === 'Low' ? 'text-green-400' :
                          getCurrentScenario().risk === 'Medium' ? 'text-yellow-400' :
                          'text-red-400'
                        }`}>
                          {getCurrentScenario().risk}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* AI Analysis */}
                  <div className="bg-gray-900/50 rounded-2xl p-6 border border-gray-600/30">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <ChartBarIcon className="h-5 w-5 text-blue-400" />
                      AI Analysis Factors
                    </h4>
                    <div className="space-y-2">
                      {getCurrentScenario().factors.map((factor, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          {factor}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className={`bg-gradient-to-r ${getCurrentScenario().color} bg-opacity-20 rounded-2xl p-6 border border-gray-600/30`}>
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <BoltIcon className="h-5 w-5" />
                      AI Recommendation
                    </h4>
                    <p className="text-gray-200">
                      {getCurrentScenario().recommendation}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Scenario Selector */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Try Different Scenarios</h3>
            
            {demoScenarios.map((scenario, index) => (
              <motion.button
                key={scenario.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveDemo(index)}
                className={`w-full p-6 rounded-2xl border transition-all ${
                  activeDemo === index
                    ? 'bg-gray-800/80 border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800/30 border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${scenario.color}`}>
                    {React.createElement(scenario.icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-white font-semibold mb-2">{scenario.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{scenario.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Trust Score:</span>
                      <span className={`font-bold ${getScoreColor(scenario.trustScore)}`}>
                        {scenario.trustScore}%
                      </span>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustScoreDemo;