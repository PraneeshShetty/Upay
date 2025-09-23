# UPay - Rural UPI Fraud Education Platform

🛡️ **Your Digital Shield Against UPI Fraud**

UPay is a comprehensive educational platform designed to help rural communities understand and prevent UPI fraud through multi-language support and AI-powered assistance.

## ✨ Features

### 🌏 Multi-Language Support
- **10 Indian Languages**: Hindi, Bengali, Tamil, Telugu, Gujarati, Marathi, Punjabi, Odia, Malayalam
- **English** support for broader accessibility
- **Real-time language switching** with persistent preferences

### 🎙️ Voice Assistance
- **Text-to-Speech** support in all supported languages
- **Voice input** for questions and interactions
- **Accessibility-first** design for low-literacy users

### � Educational Content
- **Fraud Type Recognition**: Learn about OTP scams, fake payments, phishing, QR code fraud, and voice call scams
- **Interactive Scenarios**: Practice identifying fraud situations
- **Step-by-step Guides**: Visual and audio guidance for safe UPI usage
- **Emergency Contacts**: Quick access to helpline numbers

### 🤖 AI-Powered Chat Assistant
- **Gemini AI Integration**: Intelligent chatbot for personalized help
- **Context-aware responses** focused on UPI fraud prevention
- **Multi-language conversations** with voice support
- **Educational focus** with safety-first guidance

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Upay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

4. **Configure API keys in `.env`**
   ```env
   # Clerk Authentication (Optional)
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   
   # Gemini AI API Key (Required for AI chat)
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5174`

## 🔑 Setting Up Gemini AI

### Get Your Gemini API Key

1. **Visit Google AI Studio**
   - Go to [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account

2. **Create a new API key**
   - Click "Create API Key"
   - Choose your project or create a new one
   - Copy the generated API key

3. **Add to your environment**
   ```env
   VITE_GEMINI_API_KEY=AIzaSyB1234567890abcdefghijklmnopqrstuvwxyz
   ```

4. **Restart the development server**
   ```bash
   npm run dev
   ```

### AI Chat Features

Once configured, the AI chat provides:
- **Fraud prevention guidance** in user's preferred language
- **Interactive Q&A** about UPI safety
- **Voice-enabled conversations** for accessibility
- **Context-aware responses** tailored to rural education needs

## 🎯 Target Audience

### Primary Users
- **Rural communities** learning about digital payments
- **UPI beginners** seeking fraud prevention education
- **Low-literacy users** requiring voice and visual assistance
- **Multi-lingual speakers** preferring native language support

### Use Cases
- **Fraud awareness training** for rural bank customers
- **Educational workshops** by NGOs and government agencies
- **Self-paced learning** for individual users
- **Community training programs** with voice guidance

## 🛡️ Security & Privacy

### Data Protection
- **No personal data storage** in the application
- **Client-side language preferences** only
- **Secure API communication** with encrypted connections
- **No transaction data handling** - educational purpose only

### API Security
- **Environment variables** for sensitive keys
- **Rate limiting** on AI API calls
- **Error handling** for secure failure modes

**Built with ❤️ for rural communities to stay safe in the digital economy**



## 🎯 Project Overview



This is a professional React-based web application showcasing the complete UPay UPI fraud protection suite - developed for hackathon presentation and demonstration purposes.Kavach is an AI-powered, comprehensive fraud protection system designed specifically for India's UPI ecosystem. Built with a focus on rural accessibility and vernacular language support, Kavach provides real-time fraud detection and prevention for digital payments.Currently, two official plugins are available:



### Key Features Demonstrated



- **AI Trust Scoring Engine** - Real-time transaction risk analysis## 🎯 Project Overview- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh

- **SMS & Call Guardian** - AI-powered scam detection

- **Voice-First Interface** - 10+ Indian languages support- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Behavioral Analysis** - Personalized fraud detection

- **Rural-First Design** - Accessibility-focused UXThis is a professional React-based web application showcasing the complete Kavach UPI fraud protection suite - developed for hackathon presentation and demonstration purposes.

- **Interactive Dashboard** - Real-time security monitoring

## React Compiler

## 🚀 Live Demo

### Key Features Demonstrated

The application is running at: `http://localhost:5173/`

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Navigation

- **AI Trust Scoring Engine** - Real-time transaction risk analysis

- **Home** - Hero section, statistics, and feature overview

- **Features** - Detailed feature showcase and interactive demos- **SMS & Call Guardian** - AI-powered scam detection## Expanding the ESLint configuration

- **Dashboard** - Real-time security monitoring interface

- **About** - Team, mission, and project journey- **Voice-First Interface** - 10+ Indian languages support



## 💻 Technical Stack- **Behavioral Analysis** - Personalized fraud detectionIf you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:



### Frontend- **Rural-First Design** - Accessibility-focused UX

- **React 18** with TypeScript

- **Vite** for blazing-fast development- **Interactive Dashboard** - Real-time security monitoring```js

- **React Router DOM** for navigation

- **Tailwind CSS** for responsive designexport default defineConfig([

- **Framer Motion** for smooth animations

- **Heroicons** for professional iconography## 🚀 Live Demo  globalIgnores(['dist']),



### Key Libraries  {

- `react-router-dom` - Client-side routing

- `framer-motion` - Advanced animationsThe application is running at: `http://localhost:5173/`    files: ['**/*.{ts,tsx}'],

- `@heroicons/react` - Beautiful SVG icons

- `lucide-react` - Additional icon library    extends: [

- `tailwindcss` - Utility-first CSS framework

### Navigation      // Other configs...

## 🏗️ Project Structure



```

src/- **Home** - Hero section, statistics, and feature overview      // Remove tseslint.configs.recommended and replace with this

├── components/           # Reusable UI components

│   ├── Navbar.tsx       # Navigation header- **Features** - Detailed feature showcase and interactive demos      tseslint.configs.recommendedTypeChecked,

│   ├── Hero.tsx         # Landing page hero section

│   ├── Statistics.tsx   # UPI fraud statistics- **Dashboard** - Real-time security monitoring interface      // Alternatively, use this for stricter rules

│   ├── FeaturesOverview.tsx

│   ├── TrustScoreDemo.tsx- **About** - Team, mission, and project journey      tseslint.configs.strictTypeChecked,

│   ├── CallToAction.tsx

│   └── Footer.tsx      // Optionally, add this for stylistic rules

├── pages/               # Route components

│   ├── Home.tsx         # Landing page## 💻 Technical Stack      tseslint.configs.stylisticTypeChecked,

│   ├── Features.tsx     # Feature showcase

│   ├── Dashboard.tsx    # Security dashboard

│   └── About.tsx        # About page

├── App.tsx              # Main app component### Frontend      // Other configs...

├── main.tsx             # App entry point

└── index.css            # Global styles with Tailwind- **React 18** with TypeScript    ],

```

- **Vite** for blazing-fast development    languageOptions: {

## 🎨 Design Highlights

- **React Router DOM** for navigation      parserOptions: {

### Color Scheme

- **Primary**: Blue gradient (#3B82F6 to #2563EB)- **Tailwind CSS** for responsive design        project: ['./tsconfig.node.json', './tsconfig.app.json'],

- **Success**: Green tones for safe transactions

- **Warning**: Orange/Yellow for medium risk- **Framer Motion** for smooth animations        tsconfigRootDir: import.meta.dirname,

- **Danger**: Red tones for high risk/blocked

- **Heroicons** for professional iconography      },

### Typography

- **Display Font**: Lexend (headers and branding)      // other options...

- **Body Font**: Inter (readable and modern)

- **Responsive**: Mobile-first design approach### Key Libraries    },



### Animations- `react-router-dom` - Client-side routing  },

- Smooth scroll animations with Framer Motion

- Interactive hover effects and transitions- `framer-motion` - Advanced animations])

- Trust score progress animations

- Staggered element reveals- `@heroicons/react` - Beautiful SVG icons```



## 🚀 Getting Started- `lucide-react` - Additional icon library



### Prerequisites- `tailwindcss` - Utility-first CSS frameworkYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

- Node.js 16+ 

- npm or yarn



### Installation & Setup## 🏗️ Project Structure```js



1. **Install dependencies**// eslint.config.js

   ```bash

   npm install```import reactX from 'eslint-plugin-react-x'

   ```

src/import reactDom from 'eslint-plugin-react-dom'

2. **Start development server**

   ```bash├── components/           # Reusable UI components

   npm run dev

   ```│   ├── Navbar.tsx       # Navigation headerexport default defineConfig([



3. **Build for production**│   ├── Hero.tsx         # Landing page hero section  globalIgnores(['dist']),

   ```bash

   npm run build│   ├── Statistics.tsx   # UPI fraud statistics  {

   ```

│   ├── FeaturesOverview.tsx    files: ['**/*.{ts,tsx}'],

4. **Preview production build**

   ```bash│   ├── TrustScoreDemo.tsx    extends: [

   npm run preview

   ```│   ├── CallToAction.tsx      // Other configs...



## 🎯 Hackathon Features│   └── Footer.tsx      // Enable lint rules for React



### Problem Statement├── pages/               # Route components      reactX.configs['recommended-typescript'],

- **Issue**: UPI fraud losses of ₹2,145 crores in 2023

- **Target**: 40M+ vulnerable rural UPI users│   ├── Home.tsx         # Landing page      // Enable lint rules for React DOM

- **Solution**: AI-powered, voice-first fraud protection

│   ├── Features.tsx     # Feature showcase      reactDom.configs.recommended,

### Innovation Highlights

│   ├── Dashboard.tsx    # Security dashboard    ],

1. **On-Device AI Processing** - Privacy-first approach

2. **Multi-Language Voice Interface** - Accessibility for all│   └── About.tsx        # About page    languageOptions: {

3. **Behavioral Learning** - Personalized protection

4. **Cooling-Off Periods** - Preventing impulse fraud├── App.tsx              # Main app component      parserOptions: {

5. **Community-Sourced Intelligence** - Crowd-sourced fraud detection

├── main.tsx             # App entry point        project: ['./tsconfig.node.json', './tsconfig.app.json'],

### Technical Achievements

└── index.css            # Global styles with Tailwind        tsconfigRootDir: import.meta.dirname,

- **99.9% Fraud Detection Rate** (simulated)

- **Real-time Processing** - Sub-second analysis```      },

- **Offline Capability** - Works without internet

- **Scalable Architecture** - Cloud-ready deployment      // other options...



## 🏆 Competitive Advantages## 🎨 Design Highlights    },



- **Rural-First Design** - Unlike existing solutions  },

- **Voice Navigation** - Accessibility for low-literacy users

- **Multi-Language Support** - 10+ Indian languages### Color Scheme])

- **Zero Cost for Rural Users** - Social impact focus

- **Privacy Guaranteed** - On-device processing- **Primary**: Blue gradient (#3B82F6 to #2563EB)```



## 🎮 Interactive Demos- **Success**: Green tones for safe transactions

- **Warning**: Orange/Yellow for medium risk

### Trust Score Calculator- **Danger**: Red tones for high risk/blocked

- Test different transaction scenarios

- See real-time risk assessment### Typography

- Understand AI decision making- **Display Font**: Lexend (headers and branding)

- **Body Font**: Inter (readable and modern)

### Voice Command Simulator- **Responsive**: Mobile-first design approach

- Experience voice-first navigation

- Multi-language support demo### Animations

- Accessibility features showcase- Smooth scroll animations with Framer Motion

- Interactive hover effects and transitions

### Fraud Detection Showcase- Trust score progress animations

- SMS scam detection demo- Staggered element reveals

- Call protection simulation

- Behavioral analysis examples## 🚀 Getting Started



## 📱 Mobile Responsiveness### Prerequisites

- Node.js 16+ 

The application is fully responsive and optimized for:- npm or yarn

- **Desktop** - Full feature experience

- **Tablet** - Touch-optimized interface### Installation & Setup

- **Mobile** - One-handed navigation

- **Low-end devices** - Performance optimized1. **Install dependencies**

   ```bash

## 🔒 Security & Privacy   npm install

   ```

- **No Data Collection** - Privacy by design

- **On-Device Processing** - Data never leaves user's phone2. **Start development server**

- **Open Source Ready** - Transparent algorithms   ```bash

- **Audit Trail** - Complete transaction logging   npm run dev

   ```

## 🌟 Future Roadmap

3. **Build for production**

### Phase 1 (MVP)   ```bash

- [x] Core AI engine development   npm run build

- [x] Web application frontend   ```

- [x] Trust scoring algorithm

- [x] Multi-language support4. **Preview production build**

   ```bash

### Phase 2 (Beta)   npm run preview

- [ ] Mobile app development   ```

- [ ] UPI provider integrations

- [ ] Real-time fraud database## 🎯 Hackathon Features

- [ ] Community reporting system

### Problem Statement

### Phase 3 (Scale)- **Issue**: UPI fraud losses of ₹2,145 crores in 2023

- [ ] Government partnerships- **Target**: 40M+ vulnerable rural UPI users

- [ ] Banking integrations- **Solution**: AI-powered, voice-first fraud protection

- [ ] Advanced ML models

- [ ] International expansion### Innovation Highlights



## 👥 Team1. **On-Device AI Processing** - Privacy-first approach

2. **Multi-Language Voice Interface** - Accessibility for all

**Built by a team of cybersecurity experts, AI researchers, and UX designers passionate about financial inclusion and digital safety.**3. **Behavioral Learning** - Personalized protection

4. **Cooling-Off Periods** - Preventing impulse fraud

## 📄 License5. **Community-Sourced Intelligence** - Crowd-sourced fraud detection



This project is built for hackathon demonstration purposes. All concepts and implementations are original work by the UPay team.### Technical Achievements



---- **99.9% Fraud Detection Rate** (simulated)

- **Real-time Processing** - Sub-second analysis

**🛡️ UPay - Because every digital transaction deserves protection.**- **Offline Capability** - Works without internet

- **Scalable Architecture** - Cloud-ready deployment

*Made with ❤️ for India's digital payment security*
## 🏆 Competitive Advantages

- **Rural-First Design** - Unlike existing solutions
- **Voice Navigation** - Accessibility for low-literacy users
- **Multi-Language Support** - 10+ Indian languages
- **Zero Cost for Rural Users** - Social impact focus
- **Privacy Guaranteed** - On-device processing

## 🎮 Interactive Demos

### Trust Score Calculator
- Test different transaction scenarios
- See real-time risk assessment
- Understand AI decision making

### Voice Command Simulator
- Experience voice-first navigation
- Multi-language support demo
- Accessibility features showcase

### Fraud Detection Showcase
- SMS scam detection demo
- Call protection simulation
- Behavioral analysis examples

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- **Desktop** - Full feature experience
- **Tablet** - Touch-optimized interface
- **Mobile** - One-handed navigation
- **Low-end devices** - Performance optimized

## 🔒 Security & Privacy

- **No Data Collection** - Privacy by design
- **On-Device Processing** - Data never leaves user's phone
- **Open Source Ready** - Transparent algorithms
- **Audit Trail** - Complete transaction logging

## 🌟 Future Roadmap

### Phase 1 (MVP)
- [x] Core AI engine development
- [x] Web application frontend
- [x] Trust scoring algorithm
- [x] Multi-language support

### Phase 2 (Beta)
- [ ] Mobile app development
- [ ] UPI provider integrations
- [ ] Real-time fraud database
- [ ] Community reporting system

### Phase 3 (Scale)
- [ ] Government partnerships
- [ ] Banking integrations
- [ ] Advanced ML models
- [ ] International expansion

## 👥 Team

**Built by a team of cybersecurity experts, AI researchers, and UX designers passionate about financial inclusion and digital safety.**

## 📄 License

This project is built for hackathon demonstration purposes. All concepts and implementations are original work by the Kavach team.

---

**🛡️ Kavach - Because every digital transaction deserves protection.**

*Made with ❤️ for India's digital payment security*