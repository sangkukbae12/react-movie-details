import React from 'react';
import { Grid } from '@material-ui/core';
import InfoSection from './container/InfoSection';
import CastSection from './container/CastSection';
import ReviewSection from './container/ReviewSection';
import SimilarMovieSection from './container/SimilarMovieSection';
import ImageSection from './container/ImageSection';
import MovieHeader from './container/MovieHeader';
import './App.css';

export default function App() {
  return (
    <Grid container spacing={6}>
      <MovieHeader />
      <ImageSection />
      <InfoSection />
      <CastSection />
      <ReviewSection />
      <SimilarMovieSection />
    </Grid>
  );
}
