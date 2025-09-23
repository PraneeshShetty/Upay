import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  XMarkIcon,
  PaperAirplaneIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface GeminiChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const GeminiChat: React.FC<GeminiChatProps> = ({ isOpen, onClose }) => {
  const { t, speak, currentLanguage } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Gemini AI
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  // Check if API key is available
  if (!apiKey) {
    console.error('VITE_GEMINI_API_KEY is not set in environment variables');
  }
  
  const genAI = new GoogleGenerativeAI(apiKey || '');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t('geminiWelcome'),
        isUser: false,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      speak(t('geminiWelcome'));
    }
  }, [isOpen, t, speak]);

  const generateContextPrompt = (userMessage: string) => {
    const context = `You are a helpful AI assistant for UPay, a rural education platform focused on UPI fraud awareness in India. 
    You should:
    1. Help users understand UPI fraud prevention
    2. Answer questions about digital payment security
    3. Provide guidance in simple, easy-to-understand language
    4. Be supportive and educational
    5. Respond in ${currentLanguage === 'en' ? 'English' : 'the user\'s preferred language when possible'}
    6. Keep responses concise and practical
    7. If asked about technical UPI details, explain in simple terms
    8. Always prioritize user safety and fraud prevention
    
    Current user language preference: ${currentLanguage}
    
    User message: ${userMessage}
    
    Please provide a helpful, educational response focused on UPI safety and fraud prevention:`;
    
    return context;
  };

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      if (!apiKey) {
        throw new Error('API key not configured');
      }
      
      const prompt = generateContextPrompt(message);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: text,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      
      // Speak the AI response
      speak(text);
    } catch (error) {
      console.error('Error generating response:', error);
      
      let errorText = t('geminiError');
      
      // Provide more specific error messages
      if (error instanceof Error) {
        if (error.message.includes('API key not configured')) {
          errorText = t('geminiApiWarning');
        } else if (error.message.includes('API_KEY_INVALID')) {
          errorText = 'Invalid API key. Please check your Gemini API key configuration.';
        } else if (error.message.includes('PERMISSION_DENIED')) {
          errorText = 'API access denied. Please verify your API key permissions.';
        } else if (error.message.includes('QUOTA_EXCEEDED')) {
          errorText = 'API quota exceeded. Please try again later.';
        }
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorText,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    sendMessage(inputText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = currentLanguage === 'en' ? 'en-US' : 
                        currentLanguage === 'hi' ? 'hi-IN' :
                        currentLanguage === 'bn' ? 'bn-IN' :
                        currentLanguage === 'ta' ? 'ta-IN' :
                        currentLanguage === 'te' ? 'te-IN' :
                        currentLanguage === 'gu' ? 'gu-IN' :
                        currentLanguage === 'mr' ? 'mr-IN' :
                        currentLanguage === 'pa' ? 'pa-IN' :
                        currentLanguage === 'or' ? 'or-IN' :
                        currentLanguage === 'ml' ? 'ml-IN' : 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  const speakMessage = (text: string) => {
    speak(text);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 w-96 h-[600px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">{t('geminiAssistant')}</h3>
                <p className="text-blue-100 text-sm">{t('geminiSubtitle')}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* API Key Warning */}
          {!import.meta.env.VITE_GEMINI_API_KEY && (
            <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-4 py-3">
              <div className="flex items-center text-yellow-300 text-sm">
                <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                {t('geminiApiWarning')}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-blue-600 text-white ml-4'
                      : 'bg-gray-800 text-gray-100 mr-4'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  {!message.isUser && (
                    <button
                      onClick={() => speakMessage(message.text)}
                      className="mt-2 text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      <SpeakerWaveIcon className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-100 p-3 rounded-2xl mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t('geminiPlaceholder')}
                  className="w-full bg-gray-800 text-white border border-gray-600 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-blue-500 transition-colors"
                  disabled={isLoading}
                />
                <button
                  onClick={startListening}
                  disabled={isLoading || isListening}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-lg transition-colors ${
                    isListening
                      ? 'text-red-400 bg-red-500/20'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  <MicrophoneIcon className="h-5 w-5" />
                </button>
              </div>
              
              <button
                onClick={handleSend}
                disabled={!inputText.trim() || isLoading}
                className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-gray-500 text-xs mt-2 text-center">
              {t('geminiDisclaimer')}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GeminiChat;