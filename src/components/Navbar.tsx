import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShieldCheckIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  VscHome, 
  VscLayers, 
  VscDashboard, 
  VscInfo, 
  VscAccount
} from 'react-icons/vsc';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Dock from './Dock';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('learn'), href: '/learn' },
    { name: t('practice'), href: '/practice' },
    { name: t('help'), href: '/about' },
  ];

  const baseDockItems = [
    { 
      icon: <VscHome size={18} />, 
      label: t('home'), 
      onClick: () => navigate('/'),
      className: location.pathname === '/' ? 'bg-indigo-500/20 border-indigo-400/30' : ''
    },
    { 
      icon: <VscLayers size={18} />, 
      label: t('learn'), 
      onClick: () => navigate('/learn'),
      className: location.pathname === '/learn' ? 'bg-indigo-500/20 border-indigo-400/30' : ''
    },
    { 
      icon: <VscDashboard size={18} />, 
      label: t('practice'), 
      onClick: () => navigate('/practice'),
      className: location.pathname === '/practice' ? 'bg-indigo-500/20 border-indigo-400/30' : ''
    },
    { 
      icon: <VscInfo size={18} />, 
      label: t('help'), 
      onClick: () => navigate('/about'),
      className: location.pathname === '/about' ? 'bg-indigo-500/20 border-indigo-400/30' : ''
    },
  ];

  const signedOutDockItems = [
    ...baseDockItems,
    { 
      icon: <VscAccount size={18} />, 
      label: 'Sign In', 
      onClick: () => {
        // Trigger sign in modal
        const signInButton = document.querySelector('[data-clerk-sign-in-button]') as HTMLElement;
        signInButton?.click();
      },
      className: 'bg-gradient-to-r from-indigo-500/30 to-purple-500/30 border-indigo-400/50'
    },
  ];

  const signedInDockItems = [
    ...baseDockItems,
    { 
      icon: <VscAccount size={18} />, 
      label: 'Account', 
      onClick: () => {
        // Trigger user menu
        const userButton = document.querySelector('[data-clerk-user-button]') as HTMLElement;
        userButton?.click();
      },
      className: 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400/50'
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Logo Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-75"></div>
                  <div className="relative bg-black p-2 rounded-lg">
                    <ShieldCheckIcon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                <span className="font-display text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  UPay
                </span>
              </Link>
            </motion.div>

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSelector />
              <SignedOut>
                <SignInButton mode="modal">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300"
                  >
                    Sign In
                  </motion.button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10 rounded-full border-2 border-indigo-400/50 hover:border-indigo-400 transition-colors"
                    }
                  }}
                />
              </SignedIn>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Language Selector */}
              <LanguageSelector />
              
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors duration-200"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-500'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Language Selector */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="px-4 py-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium text-base">Language</span>
                    <LanguageSelector />
                  </div>
                </motion.div>
                
                {/* Mobile Auth Section */}
                <SignedOut>
                  <SignInButton mode="modal">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base rounded-lg shadow-lg"
                    >
                      Sign In
                    </motion.button>
                  </SignInButton>
                </SignedOut>
                
                <SignedIn>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-full mt-4 flex justify-center"
                  >
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-12 h-12 rounded-full border-2 border-indigo-400/50"
                        }
                      }}
                    />
                  </motion.div>
                </SignedIn>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Dock Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block"
      >
        <SignedOut>
          <Dock 
            items={signedOutDockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </SignedOut>
        <SignedIn>
          <Dock 
            items={signedInDockItems}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </SignedIn>
      </motion.div>
    </>
  );
};

export default Navbar;