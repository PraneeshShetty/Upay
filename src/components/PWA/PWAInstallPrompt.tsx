import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { usePWA } from '../../utils/pwa';
import {
  ArrowDownTrayIcon,
  XMarkIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  WifiIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

interface PWAPromptProps {
  onClose?: () => void;
}

export const PWAInstallPrompt: React.FC<PWAPromptProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const {
    install,
    isInstalled,
    onInstallable,
    onNetworkChange
  } = usePWA();

  useEffect(() => {
    // Listen for installable state changes
    onInstallable((canInstall: boolean) => {
      if (canInstall && !isInstalled()) {
        setShowPrompt(true);
      }
    });

    // Listen for network changes
    onNetworkChange((online: boolean) => {
      setIsOnline(online);
    });
  }, [onInstallable, onNetworkChange, isInstalled]);

  const handleInstall = async () => {
    setIsInstalling(true);
    
    try {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => {
          setShowPrompt(false);
          onClose?.();
        }, 2000);
      }
    } catch (error) {
      console.error('Install failed:', error);
    } finally {
      setIsInstalling(false);
    }
  };

  const handleClose = () => {
    setShowPrompt(false);
    onClose?.();
  };

  if (!showPrompt || isInstalled()) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="bg-gray-800 rounded-2xl border border-gray-700 p-6 max-w-md w-full mx-4 shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <ArrowDownTrayIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {t('installApp')}
                </h3>
                <p className="text-sm text-gray-400">UPay</p>
              </div>
            </div>
            
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <XMarkIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>

          {/* Install Success */}
          {installSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <CheckCircleIcon className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">
                {t('installSuccessful')}
              </h4>
              <p className="text-gray-300">
                {t('appInstalledMessage')}
              </p>
            </motion.div>
          ) : (
            <>
              {/* Benefits */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <WifiIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      {t('offlineAccess')}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t('offlineAccessDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      {t('fastAccess')}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t('fastAccessDesc')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <ComputerDesktopIcon className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">
                      {t('nativeExperience')}
                    </p>
                    <p className="text-sm text-gray-400">
                      {t('nativeExperienceDesc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Network Status */}
              {!isOnline && (
                <div className="flex items-center space-x-2 mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" />
                  <p className="text-sm text-yellow-300">
                    {t('installOfflineWarning')}
                  </p>
                </div>
              )}

              {/* Install Button */}
              <div className="flex space-x-3">
                <motion.button
                  onClick={handleInstall}
                  disabled={isInstalling || !isOnline}
                  whileHover={{ scale: isInstalling ? 1 : 1.02 }}
                  whileTap={{ scale: isInstalling ? 1 : 0.98 }}
                  className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    isInstalling || !isOnline
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  }`}
                >
                  {isInstalling ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{t('installing')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <ArrowDownTrayIcon className="h-5 w-5" />
                      <span>{t('installNow')}</span>
                    </div>
                  )}
                </motion.button>
                
                <button
                  onClick={handleClose}
                  className="px-4 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  {t('later')}
                </button>
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const PWAUpdatePrompt: React.FC = () => {
  const { t } = useLanguage();
  const [showUpdate, setShowUpdate] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const { onUpdate, updateApp } = usePWA();

  useEffect(() => {
    onUpdate(() => {
      setShowUpdate(true);
    });
  }, [onUpdate]);

  const handleUpdate = async () => {
    setIsUpdating(true);
    await updateApp();
    // App will reload automatically
  };

  if (!showUpdate) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-2xl z-50"
    >
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-blue-500/20 rounded-full">
          <ArrowDownTrayIcon className="h-5 w-5 text-blue-400" />
        </div>
        
        <div className="flex-1">
          <h4 className="font-semibold text-white mb-1">
            {t('updateAvailable')}
          </h4>
          <p className="text-sm text-gray-300 mb-3">
            {t('updateAvailableDesc')}
          </p>
          
          <div className="flex space-x-2">
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                isUpdating
                  ? 'bg-gray-600 text-gray-400'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isUpdating ? t('updating') : t('updateNow')}
            </button>
            
            <button
              onClick={() => setShowUpdate(false)}
              className="px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t('dismiss')}
            </button>
          </div>
        </div>
        
        <button
          onClick={() => setShowUpdate(false)}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          <XMarkIcon className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </motion.div>
  );
};

export default PWAInstallPrompt;