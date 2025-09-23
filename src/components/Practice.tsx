import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';
import { 
  CheckCircleIcon,
  XCircleIcon,
  PlayIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

interface Scenario {
  id: string;
  title: string;
  description: string;
  situation: string;
  options: string[];
  correctAnswer: number;
  explanations: string[];
  tips: string[];
}

const Practice: React.FC = () => {
  const { t, speak, currentLanguage } = useLanguage();
  const [currentScenario, setCurrentScenario] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [completedScenarios, setCompletedScenarios] = useState<number>(0);

  // Get scenarios from translations
  const scenarios: Scenario[] = useMemo(() => {
    return getTranslation('practiceScenarios', currentLanguage) || [];
  }, [currentLanguage]);

  // Handle case when scenarios are not loaded yet
  if (!scenarios || scenarios.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading practice scenarios...</p>
        </div>
      </div>
    );
  }

  const currentScenarioData = scenarios[currentScenario];
  const isCorrect = selectedOption === currentScenarioData?.correctAnswer;

  const handleOptionSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setShowResult(true);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setCompletedScenarios(completedScenarios + 1);

    // Speak the result and explanation
    const resultText = isCorrect ? t('correctAnswer') : t('incorrectAnswer');
    const explanation = currentScenarioData?.explanations[selectedOption] || '';
    speak(`${resultText}. ${explanation}`);
  };

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setCompletedScenarios(0);
  };

  const handleSpeakScenario = () => {
    const text = `${currentScenarioData.title}. ${currentScenarioData.description}. ${currentScenarioData.situation}`;
    speak(text);
  };

  const isCompleted = currentScenario === scenarios.length - 1 && showResult;
  const progressPercentage = ((completedScenarios) / scenarios.length) * 100;

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-500/10 rounded-full border border-blue-500/20">
              <PlayIcon className="h-16 w-16 text-blue-400" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('practiceTitle')}
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            {t('practiceDescription')}
          </p>

          {/* Progress Bar */}
          <div className="bg-gray-800 rounded-full h-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
            />
          </div>

          {/* Score Display */}
          <div className="flex justify-center items-center space-x-6 text-lg">
            <div className="flex items-center">
              <TrophyIcon className="h-6 w-6 text-yellow-400 mr-2" />
              <span className="text-white">{t('score')}: {score}/{scenarios.length}</span>
            </div>
            <div className="text-gray-400">
              {t('scenario')} {currentScenario + 1} {t('of')} {scenarios.length}
            </div>
          </div>
        </motion.div>

        {!isCompleted ? (
          /* Scenario Content */
          <motion.div
            key={currentScenario}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {currentScenarioData.title}
                </h2>
                <p className="text-gray-300 mb-4">
                  {currentScenarioData.description}
                </p>
              </div>
              
              <motion.button
                onClick={handleSpeakScenario}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                🔊 {t('listen')}
              </motion.button>
            </div>

            {/* Scenario Situation */}
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                    {t('situation')}:
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {currentScenarioData.situation}
                  </p>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                {t('whatWouldYouDo')}
              </h3>
              
              {currentScenarioData.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-4 rounded-lg border text-left transition-all duration-300 ${
                    selectedOption === index
                      ? showResult
                        ? index === currentScenarioData.correctAnswer
                          ? 'bg-green-500/20 border-green-500 text-green-300'
                          : 'bg-red-500/20 border-red-500 text-red-300'
                        : 'bg-indigo-500/20 border-indigo-500 text-indigo-300'
                      : showResult && index === currentScenarioData.correctAnswer
                      ? 'bg-green-500/20 border-green-500 text-green-300'
                      : 'bg-gray-700 border-gray-600 text-gray-300 hover:border-gray-500'
                  }`}
                  disabled={showResult}
                >
                  <div className="flex items-center">
                    <span className="bg-gray-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-semibold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showResult && selectedOption === index && (
                      <div className="ml-auto">
                        {index === currentScenarioData.correctAnswer ? (
                          <CheckCircleIcon className="h-6 w-6 text-green-400" />
                        ) : (
                          <XCircleIcon className="h-6 w-6 text-red-400" />
                        )}
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && selectedOption !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-lg border mb-6 ${
                  isCorrect
                    ? 'bg-green-500/10 border-green-500/20'
                    : 'bg-red-500/10 border-red-500/20'
                }`}
              >
                <div className="flex items-start">
                  <LightBulbIcon className={`h-6 w-6 mr-3 mt-1 ${
                    isCorrect ? 'text-green-400' : 'text-red-400'
                  }`} />
                  <div>
                    <h4 className={`font-semibold mb-2 ${
                      isCorrect ? 'text-green-300' : 'text-red-300'
                    }`}>
                      {isCorrect ? t('correct') : t('incorrect')}
                    </h4>
                    <p className="text-gray-300">
                      {currentScenarioData.explanations[selectedOption]}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              {!showResult ? (
                <motion.button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  whileHover={{ scale: selectedOption !== null ? 1.05 : 1 }}
                  whileTap={{ scale: selectedOption !== null ? 0.95 : 1 }}
                  className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedOption !== null
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {t('submitAnswer')}
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleNextScenario}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  {currentScenario < scenarios.length - 1 ? t('nextScenario') : t('viewResults')}
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          /* Completion Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-12"
          >
            <TrophyIcon className="h-24 w-24 text-yellow-400 mx-auto mb-6" />
            
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('practiceComplete')}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              {t('finalScore')}: {score}/{scenarios.length}
            </p>

            <div className="bg-gray-800 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-white mb-4">{t('performance')}</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{t('accuracy')}:</span>
                  <span className="text-white font-semibold">
                    {Math.round((score / scenarios.length) * 100)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">{t('correctAnswers')}:</span>
                  <span className="text-green-400 font-semibold">{score}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">{t('totalQuestions')}:</span>
                  <span className="text-blue-400 font-semibold">{scenarios.length}</span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              {t('practiceAgain')}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Practice;