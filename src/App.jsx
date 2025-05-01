// src/App.jsx
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Call from './components/Call/Call';
import VideoSec from './components/VideoSec/VideoSec';
import AyurSrv from './components/AyurSrv/AyurSrv';
import WhatAyurOffer from './components/WhatAyurOffer/WhatAyurOffer';
import Footer from './components/Footer/Footer';
import WhyChoose from './components/WhyChoose/WhyChoose';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Call />
      <VideoSec /> 
      <AyurSrv /> 
      <WhatAyurOffer />
      <WhyChoose />
      <Footer />
      
    </div>
  );
}

export default App;
