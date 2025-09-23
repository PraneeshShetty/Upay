import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../utils/translations';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, setLanguage, t, isVoiceEnabled, toggleVoice, speak } = useLanguage();

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode);
    setIsOpen(false);
    
    // Speak welcome message in new language
    setTimeout(() => {
      speak(t('heroDescription'));
    }, 100);
  };

  return (
    <div className="flex items-center gap-2 md:gap-4">
      {/* Voice Toggle */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleVoice}
        className={`p-2 md:p-3 rounded-full border-2 transition-all duration-300 ${
          isVoiceEnabled 
            ? 'bg-green-500/20 border-green-400 text-green-400' 
            : 'bg-gray-500/20 border-gray-400 text-gray-400'
        }`}
        title={t(isVoiceEnabled ? 'voiceOn' : 'voiceOff')}
      >
        {isVoiceEnabled ? (
          <SpeakerWaveIcon className="h-4 w-4 md:h-5 md:w-5" />
        ) : (
          <SpeakerXMarkIcon className="h-4 w-4 md:h-5 md:w-5" />
        )}
      </motion.button>

      {/* Language Selector */}
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
        >
          <span className="text-xl md:text-2xl">{languages[currentLanguage as keyof typeof languages]?.flag}</span>
          <span className="font-medium hidden sm:block text-sm md:text-base">
            {languages[currentLanguage as keyof typeof languages]?.name}
          </span>
          <ChevronDownIcon 
            className={`h-3 w-3 md:h-4 md:w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 w-48 md:w-64 bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 max-h-60 md:max-h-80 overflow-y-auto"
            >
              <div className="p-2">
                {Object.entries(languages).map(([code, lang]) => (
                  <motion.button
                    key={code}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleLanguageChange(code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                      currentLanguage === code 
                        ? 'bg-indigo-500/30 text-white border border-indigo-400/50' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {currentLanguage === code && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto w-2 h-2 bg-indigo-400 rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LanguageSelector;