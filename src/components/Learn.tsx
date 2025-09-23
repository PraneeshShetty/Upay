import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import FraudTypes from './Education/FraudTypes';
import VideoSection from './Education/VideoSection';
import { 
  AcademicCapIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const Learn: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                <AcademicCapIcon className="h-16 w-16 text-indigo-400" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('learnPageTitle')}
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              {t('learnPageDescription')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Categories */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/20 rounded-xl p-8 text-center"
            >
              <ExclamationTriangleIcon className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{t('identifyFraud')}</h3>
              <p className="text-gray-300">{t('identifyFraudDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/20 rounded-xl p-8 text-center"
            >
              <ShieldCheckIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{t('preventFraud')}</h3>
              <p className="text-gray-300">{t('preventFraudDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-xl p-8 text-center"
            >
              <AcademicCapIcon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{t('learnSafety')}</h3>
              <p className="text-gray-300">{t('learnSafetyDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fraud Types Section */}
      <FraudTypes />

      {/* Educational Videos Section */}
      <VideoSection />

      {/* Emergency Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-900/20 to-orange-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('emergencyHelp')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-300 mb-2">{t('cybercrime')}</h3>
                <p className="text-3xl font-bold text-white mb-2">1930</p>
                <p className="text-gray-300 text-sm">{t('cybercrimeDesc')}</p>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-2">{t('bankHelpline')}</h3>
                <p className="text-3xl font-bold text-white mb-2">1800-425-1212</p>
                <p className="text-gray-300 text-sm">{t('bankHelplineDesc')}</p>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 md:col-span-2 lg:col-span-1">
                <h3 className="text-xl font-bold text-green-300 mb-2">{t('upiComplaint')}</h3>
                <p className="text-3xl font-bold text-white mb-2">14440</p>
                <p className="text-gray-300 text-sm">{t('upiComplaintDesc')}</p>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl max-w-2xl mx-auto"
            >
              <p className="text-yellow-300 font-semibold text-lg">
                ⚠️ {t('rememberEmergency')}
              </p>
              <p className="text-gray-300 mt-2">
                {t('rememberEmergencyDesc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Learn;