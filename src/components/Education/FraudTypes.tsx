import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  ExclamationTriangleIcon,
  PhoneIcon,
  CreditCardIcon,
  LinkIcon,
  DocumentTextIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline';

interface FraudType {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  warning: string;
  example: string;
}

const FraudTypes: React.FC = () => {
  const { t } = useLanguage();

  const fraudTypes: FraudType[] = [
    {
      id: 'otp-fraud',
      icon: <PhoneIcon className="h-8 w-8" />,
      title: t('otpFraudTitle'),
      description: t('otpFraudDesc'),
      warning: t('otpFraudWarning'),
      example: t('otpFraudExample')
    },
    {
      id: 'fake-payment',
      icon: <CreditCardIcon className="h-8 w-8" />,
      title: t('fakePaymentTitle'),
      description: t('fakePaymentDesc'),
      warning: t('fakePaymentWarning'),
      example: t('fakePaymentExample')
    },
    {
      id: 'phishing-links',
      icon: <LinkIcon className="h-8 w-8" />,
      title: t('phishingTitle'),
      description: t('phishingDesc'),
      warning: t('phishingWarning'),
      example: t('phishingExample')
    },
    {
      id: 'qr-fraud',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      title: t('qrFraudTitle'),
      description: t('qrFraudDesc'),
      warning: t('qrFraudWarning'),
      example: t('qrFraudExample')
    },
    {
      id: 'vishing',
      icon: <EyeSlashIcon className="h-8 w-8" />,
      title: t('vishingTitle'),
      description: t('vishingDesc'),
      warning: t('vishingWarning'),
      example: t('vishingExample')
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('fraudTypesTitle')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('fraudTypesSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fraudTypes.map((fraud, index) => (
            <motion.div
              key={fraud.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-400 group-hover:text-red-300 transition-colors">
                  {fraud.icon}
                </div>
                <ExclamationTriangleIcon className="h-6 w-6 text-red-400 ml-2" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">
                {fraud.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {fraud.description}
              </p>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-4">
                <p className="text-red-300 font-semibold text-sm">
                  ⚠️ {fraud.warning}
                </p>
              </div>

              <div className="bg-gray-700/50 rounded-lg p-4 mb-4">
                <p className="text-gray-400 text-sm font-semibold mb-2">{t('example')}:</p>
                <p className="text-gray-300 text-sm italic">
                  "{fraud.example}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FraudTypes;