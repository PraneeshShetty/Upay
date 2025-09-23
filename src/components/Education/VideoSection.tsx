import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  PlayIcon,
  ClockIcon,
  EyeIcon,
  LanguageIcon
} from '@heroicons/react/24/outline';

interface Video {
  id: string;
  title: string;
  titleTranslated: string;
  description: string;
  youtubeId: string;
  duration: string;
  views: string;
  category: 'basics' | 'scams' | 'prevention' | 'real-cases';
  language: string;
  thumbnail?: string;
}

const VideoSection: React.FC = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Debug: Add console log to check if component renders
  console.log('VideoSection rendering...');

  const videos: Video[] = [
    // Official & News Channel Videos
    {
      id: '1',
      title: 'UPI Fraud Awareness (Hindi) by NPCI',
      titleTranslated: t('npciOfficialTitle'),
      description: 'Official awareness video from the National Payments Corporation of India (NPCI), the creators of UPI. Must-watch for understanding the basics directly from the source.',
      youtubeId: '9mBMspGhm3E',
      duration: '3:45',
      views: '1.2M',
      category: 'basics',
      language: 'Hindi'
    },
    {
      id: '2',
      title: 'Protect Yourself from UPI Fraud by The Hindu BusinessLine',
      titleTranslated: t('hinduBusinessLineTitle'),
      description: 'Explains the rising cases of UPI fraud with clear statistics and gives practical advice on how to protect yourself.',
      youtubeId: 'UxnmO8WCo_s',
      duration: '5:20',
      views: '850K',
      category: 'prevention',
      language: 'English'
    },
    {
      id: '3',
      title: 'Watch out for new UPI Collect Money fraud by WION',
      titleTranslated: t('wionCollectFraudTitle'),
      description: 'News report focusing on the "UPI Collect Request" fraud, explaining how it works and how to avoid it.',
      youtubeId: 'zgH8x0rKMpU',
      duration: '4:15',
      views: '620K',
      category: 'scams',
      language: 'English'
    },
    // Detailed Explainer Videos
    {
      id: '4',
      title: 'PayTM, GooglePay and UPI Scam | Dhruv Rathee',
      titleTranslated: t('dhruvRatheeScamTitle'),
      description: 'Popular detailed video breaking down common methods scammers use, including social engineering tactics. Great for understanding the psychology behind scams.',
      youtubeId: 'ZFkAkN5T8_0',
      duration: '12:30',
      views: '3.4M',
      category: 'scams',
      language: 'Hindi'
    },
    {
      id: '5',
      title: 'Biggest UPI SCAMS Exposed by Zero1 x Bengaluru City Police',
      titleTranslated: t('bengaluruPoliceScamsTitle'),
      description: 'Collaboration with Bengaluru City Police exposing three major UPI scams (Refund, Autopay, Cashback) with a simple safety checklist.',
      youtubeId: 'E33SZphM3yU',
      duration: '8:45',
      views: '1.8M',
      category: 'real-cases',
      language: 'English'
    },
    {
      id: '6',
      title: 'UPI AutoPay Request Fraud (Hindi) by Lokmat Hindi',
      titleTranslated: t('lokmatAutoPayTitle'),
      description: 'Explains the newer "AutoPay" scam where users are tricked into setting up recurring payments from their accounts.',
      youtubeId: 'CrEJdCk6KxM',
      duration: '6:20',
      views: '450K',
      category: 'scams',
      language: 'Hindi'
    },
    // Quick Tips & Awareness Shorts
    {
      id: '7',
      title: 'How to avoid UPI frauds? by Research & Ranking',
      titleTranslated: t('researchRankingTipsTitle'),
      description: 'Quick YouTube Short with fast, easy-to-remember tips on avoiding UPI fraud.',
      youtubeId: 'NvEWHq-CVG4',
      duration: '0:45',
      views: '290K',
      category: 'prevention',
      language: 'English'
    },
    {
      id: '8',
      title: 'Don\'t Share Your UPI Pin To Receive Money by Paytm',
      titleTranslated: t('paytmPinAwarenessTitle'),
      description: 'Simple and clear animated video from Paytm reinforcing the most important rule: you never need to enter your PIN to receive money.',
      youtubeId: '3tq4I4NPq_w',
      duration: '1:30',
      views: '1.1M',
      category: 'basics',
      language: 'English/Hindi'
    },
    {
      id: '9',
      title: 'UPI Fraud Awareness-Digital Payment Abhiyan (English) by DSCI',
      titleTranslated: t('dsciAwarenessTitle'),
      description: 'Part of Digital Payment Abhiyan, clearly explains that UPI PIN is only needed to send money, not receive it.',
      youtubeId: 'Nq1eq2S9iRQ',
      duration: '2:15',
      views: '180K',
      category: 'basics',
      language: 'English'
    },
    {
      id: '10',
      title: 'UPI Scams in India: How to Protect Yourself',
      titleTranslated: t('dailyMotionCaseStudyTitle'),
      description: 'Uses real-life case studies to explain how people fall for scams and provides clear steps on what to do if you become a victim.',
      youtubeId: 'x95uelg', // Special handling: This opens external Dailymotion link
      duration: '10:45',
      views: '320K',
      category: 'real-cases',
      language: 'English'
    }
  ];

  const categories = [
    { id: 'all', name: t('allVideos'), icon: '🎬' },
    { id: 'basics', name: t('upiBasics'), icon: '📚' },
    { id: 'scams', name: t('fraudTypes'), icon: '⚠️' },
    { id: 'prevention', name: t('prevention'), icon: '🛡️' },
    { id: 'real-cases', name: t('realCases'), icon: '📋' }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const openVideo = (youtubeId: string) => {
    // Special handling for Dailymotion video
    if (youtubeId === 'x95uelg') {
      window.open('https://www.dailymotion.com/video/x95uelg', '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            📹 {t('educationalVideos')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('videosDescription')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a default thumbnail if YouTube thumbnail fails
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/640x360/374151/9CA3AF?text=Video+Thumbnail';
                    }}
                  />
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {currentLanguage === 'en' ? video.title : video.titleTranslated}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <EyeIcon className="h-4 w-4 mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {video.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <LanguageIcon className="h-4 w-4 mr-1" />
                    <span className="text-xs">{video.language}</span>
                  </div>
                </div>

                <motion.button
                  onClick={() => openVideo(video.youtubeId)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
                >
                  <PlayIcon className="h-4 w-4 inline mr-2" />
                  {t('watchVideo')}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Educational Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-4 text-center">
                <button
                  onClick={closeVideo}
                  className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  {t('closeVideo')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;