import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getTranslation } from '../utils/translations';

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
  isVoiceEnabled: boolean;
  toggleVoice: () => void;
  speak: (text: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('upay-language') || 'en'; // Default to English
  });
  
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(() => {
    return localStorage.getItem('upay-voice') === 'true';
  });

  const [speechSynthesis, setSpeechSynthesis] = useState<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSynthesis(window.speechSynthesis);
    }
  }, []);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
    localStorage.setItem('upay-language', language);
  };

  const t = (key: string) => getTranslation(key, currentLanguage);

  const toggleVoice = () => {
    const newVoiceState = !isVoiceEnabled;
    setIsVoiceEnabled(newVoiceState);
    localStorage.setItem('upay-voice', newVoiceState.toString());
    
    if (newVoiceState) {
      speak(t('voiceOn'));
    }
  };

  const speak = (text: string) => {
    if (!isVoiceEnabled || !speechSynthesis) return;

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice based on language
    const voices = speechSynthesis.getVoices();
    const languageVoice = voices.find(voice => 
      voice.lang.startsWith(currentLanguage) || 
      (currentLanguage === 'hi' && voice.lang.includes('hi')) ||
      (currentLanguage === 'bn' && voice.lang.includes('bn')) ||
      (currentLanguage === 'ta' && voice.lang.includes('ta')) ||
      (currentLanguage === 'te' && voice.lang.includes('te'))
    );
    
    if (languageVoice) {
      utterance.voice = languageVoice;
    }

    utterance.rate = 0.8; // Slower speech for better comprehension
    utterance.pitch = 1;
    utterance.volume = 1;

    speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    // Load voices when they become available
    if (speechSynthesis) {
      const loadVoices = () => speechSynthesis.getVoices();
      speechSynthesis.addEventListener('voiceschanged', loadVoices);
      return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    }
  }, [speechSynthesis]);

  const value = {
    currentLanguage,
    setLanguage,
    t,
    isVoiceEnabled,
    toggleVoice,
    speak
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};