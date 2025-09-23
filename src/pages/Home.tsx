import Hero from '../components/Hero';
import FeaturesShowcase from '../components/FeaturesShowcase';
import TrustScoreDemo from '../components/TrustScoreDemo';
import Statistics from '../components/Statistics';
import EnhancedCTA from '../components/EnhancedCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <FeaturesShowcase />
      <TrustScoreDemo />
      <Statistics />
      <EnhancedCTA />
      <Footer />
    </div>
  );
};

export default Home;