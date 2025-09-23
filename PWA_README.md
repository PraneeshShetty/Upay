# UPay - Progressive Web App

UPay is a comprehensive UPI fraud prevention and education platform designed specifically for rural communities. It provides educational content, interactive practice scenarios, and AI-powered assistance to help users protect themselves from digital payment frauds.

## 🚀 PWA Features

### 📱 App-like Experience
- **Installable**: Can be installed on mobile devices and desktops like a native app
- **Offline Support**: Full functionality available without internet connection
- **Fast Loading**: Optimized performance with intelligent caching
- **Responsive Design**: Works seamlessly across all device sizes

### 🔧 Technical Features
- **Service Worker**: Advanced caching strategies for optimal performance
- **Background Sync**: Syncs data when connection is restored
- **Push Notifications**: Updates and alerts (when implemented)
- **Automatic Updates**: Seamless app updates with user notifications

## 🌍 Multi-language Support

UPay supports 10 languages to serve diverse rural communities:
- **English** (en)
- **Hindi** (hi) - हिंदी
- **Bengali** (bn) - বাংলা
- **Tamil** (ta) - தமிழ்
- **Telugu** (te) - తెలుగు
- **Gujarati** (gu) - ગુજરાતી
- **Marathi** (mr) - मराठी
- **Punjabi** (pa) - ਪੰਜਾਬੀ
- **Odia** (or) - ଓଡ଼ିଆ
- **Malayalam** (ml) - മലയാളം

## 📚 Educational Content

### Fraud Types Covered
1. **OTP Sharing Scam** - Never share your OTP with anyone
2. **Fake Payment Screenshots** - Always verify actual money receipt
3. **QR Code Swap** - Check recipient name before paying
4. **Vishing (Voice Phishing)** - Banks never call for PINs/passwords
5. **Phishing Links** - Avoid suspicious links and websites

### Learning Methods
- **Interactive Content**: Engaging educational materials
- **Practice Scenarios**: Real-world fraud simulation exercises
- **Voice Support**: Audio guidance in local languages
- **AI Assistant**: Gemini-powered chatbot for personalized help
- **Video Content**: Educational videos with local language support

## 🛡️ Security Features

- **Offline-first Architecture**: Sensitive operations work without internet
- **No Data Collection**: User privacy is completely protected
- **Local Storage**: All user progress stored locally on device
- **Secure Caching**: Educational content cached safely for offline use

## 🏗️ Technical Architecture

### Frontend Stack
- **React 18** with TypeScript for type safety
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive styling
- **Framer Motion** for smooth animations
- **React Router** for navigation

### PWA Implementation
- **Manifest.json**: App metadata and installation behavior
- **Service Worker**: Caching, offline support, and background sync
- **Cache Strategies**: Static and dynamic caching for optimal performance
- **Install Prompts**: User-friendly installation experience

### AI Integration
- **Google Gemini AI**: Contextual assistance and Q&A
- **Web Speech API**: Voice input/output support
- **Multi-language Processing**: AI responses in user's preferred language

## 📱 Installation

### Mobile Devices (Android/iOS)
1. Open UPay in your browser
2. Look for "Install App" banner or menu option
3. Tap "Install" when prompted
4. App will be added to your home screen

### Desktop (Chrome/Edge)
1. Visit UPay in Chrome or Edge browser
2. Click the install icon in the address bar
3. Click "Install" in the confirmation dialog
4. App will be added to your applications

### Manual Installation
1. Open browser menu (three dots)
2. Select "Add to Home Screen" or "Install App"
3. Follow the installation prompts

## 🔧 Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd upay

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Serve PWA build
npm run build:pwa
```

### Testing PWA Features
1. Build the production version: `npm run build`
2. Serve locally: `npm run serve`
3. Open in browser and test:
   - Installation prompts
   - Offline functionality
   - Service worker caching
   - App-like behavior

## 🌐 Offline Capabilities

### Available Offline
- ✅ All educational content
- ✅ Practice scenarios and quizzes
- ✅ Safety tips and guidelines
- ✅ Multi-language interface
- ✅ Progress tracking (local)

### Requires Internet
- ❌ AI chatbot responses
- ❌ Latest fraud alerts
- ❌ Video streaming content
- ❌ Real-time updates

## 📊 Performance Optimizations

### Caching Strategy
- **Static Assets**: Cached indefinitely with version-based updates
- **API Responses**: Cached with network-first strategy
- **Educational Content**: Pre-cached for offline access
- **User Data**: Stored locally for instant access

### Bundle Optimization
- **Code Splitting**: Separate chunks for vendor libraries
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Compressed images with fallbacks
- **Lazy Loading**: Components loaded on demand

## 🚀 Deployment

### Build Configuration
The app is configured for deployment on static hosting platforms:
- **Netlify**: Drop the `dist` folder
- **Vercel**: Connect repository for automatic deployment
- **GitHub Pages**: Use `gh-pages` workflow
- **Firebase Hosting**: Use Firebase CLI deployment

### Environment Variables
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test PWA functionality
5. Submit a pull request

### PWA Testing Checklist
- [ ] App installs correctly on mobile/desktop
- [ ] Offline functionality works as expected
- [ ] Service worker updates properly
- [ ] Manifest.json is valid
- [ ] All languages work offline
- [ ] Performance metrics are acceptable

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the documentation
- Open an issue on GitHub
- Contact the development team

## 🎯 Future Enhancements

- **Push Notifications**: Real-time fraud alerts
- **Background Sync**: Sync progress when online
- **Advanced Offline AI**: Local AI model for offline assistance
- **Community Features**: User-generated content sharing
- **Analytics**: Usage tracking for improvement insights

---

**UPay** - Empowering rural communities with digital payment security education through accessible, offline-capable technology.