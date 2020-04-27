import React from 'react';
import { Grid, Container } from '@material-ui/core';
import Header from '../components/Header';
import MovieBreadcrumb from '../components/MovieBreadcrumb';

const MovieHeader = () => {
  return (
    <Grid item xs={12} sm={12}>
      <Header />
      <br />
      <Container>
        <MovieBreadcrumb />
      </Container>
    </Grid>
  );
};

export default MovieHeader;
