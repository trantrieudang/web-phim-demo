import React from 'react';
import Footer from '../../components/Footer';
import TheaterGroup from '../../components/TheaterGroup';
import MovieDetail from './components/MovieDetail';

export default function MovieBookingDetail() {
  return (
    <div>
      <MovieDetail />
      <TheaterGroup />
      <Footer />
    </div>
  );
}
