import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GeminiChat from './GeminiChat';

const FloatingChatButton: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-40 flex items-center justify-center transition-all duration-300 ${
          isChatOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }`}
        style={{
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isChatOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isChatOpen ? (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Floating pulse effect when closed */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 w-16 h-16 z-30">
          <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
          <div className="absolute inset-2 rounded-full bg-blue-400 animate-ping opacity-30" style={{ animationDelay: '0.5s' }}></div>
        </div>
      )}

      {/* Chat Interface */}
      <GeminiChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
};

export default FloatingChatButton;