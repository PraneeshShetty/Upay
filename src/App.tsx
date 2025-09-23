import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import About from './pages/About';
import Learn from './components/Learn';
import Practice from './components/Practice';
import FloatingChatButton from './components/FloatingChatButton';
import PWAInstallPrompt from './components/PWA/PWAInstallPrompt';
import SimplePreloader from './components/Preloader/SimplePreloader';
import { LanguageProvider } from './contexts/LanguageContext';
import { pwaManager } from './utils/pwa';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Listen for app updates
    pwaManager.onUpdate(() => {
      console.log('New app version available');
    });

    // Listen for network changes
    pwaManager.onNetworkChange((isOnline) => {
      console.log('Network status changed:', isOnline ? 'online' : 'offline');
    });
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Show preloader while loading
  if (isLoading) {
    return (
      <LanguageProvider>
        <SimplePreloader onComplete={handlePreloaderComplete} />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/practice" element={<Practice />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
          </Routes>
          
          {/* Floating Chat Button - Available on all pages */}
          <FloatingChatButton />
          
          {/* PWA Install Prompt */}
          <PWAInstallPrompt />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
