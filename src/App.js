import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Common Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HeroSlider from './components/HeroSlider';
import EnquiryForm from './pages/EnquiryForm';
import AboutUsCarousel from './pages/AboutUsCarousel';
//import NewLaunchCarousel from './pages/NewLaunchCarousel';
//import LatestCarousel from './pages/LatestCarousel';
import NewsVideosComp from './pages/NewsVideosComp';
import MediaCenter from './pages/MediaCenter';

const App = () => {
  const [selectedBikeId, setSelectedBikeId] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              {!selectedBikeId ? (
                <>
                  <HeroSlider onSlideClick={(id) => setSelectedBikeId(id)} />
                </>
              ) : (
                <EnquiryForm bikeId={selectedBikeId} onBack={() => setSelectedBikeId(null)} />
              )}
            </>
          }
        />
        

        {/* Media Center */}
        <Route path="/media-center" element={<MediaCenter />} />
      </Routes>
      <AboutUsCarousel/>
        <NewsVideosComp />

      <Footer />
    </Router>
  );
};

export default App;
