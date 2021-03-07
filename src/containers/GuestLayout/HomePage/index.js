import React from 'react';
import Carousel from './components/Carousel';
import OnTop from './components/OnTop';
import SearchBar from './components/SearchBar';
import TheaterGroup from './components/TheaterGroup';
import News from './components/News';
import AppConn from './components/AppConn';
import Footer from './components/Footer';
export default function HomePage() {
  return (
    <div id="homePage_Link">
      <Carousel />
      <SearchBar />
      <OnTop />
      <TheaterGroup />
      <News />
      <AppConn />
      <Footer />
    </div>
  );
}