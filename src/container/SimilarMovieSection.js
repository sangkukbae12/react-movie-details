import React from 'react';
import { Grid, Container, Button, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import SimilarMovieCard from '../components/SimilarMovieCard';

const SimilarMovieSection = () => {
  return (
    <Grid item container xs={12} sm={12}>
      <Container maxWidth="md" style={{ overflow: 'hidden' }}>
        <Grid item xs={12} sm={12}>
          <Button style={{ marginBottom: '1rem' }}>
            <Typography variant="h6">Similar movies</Typography>
          </Button>
        </Grid>
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          dragElastic={0.2}
          dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 50,
          }}
        >
          <Grid item container justify="flex-start" wrap="nowrap">
            <SimilarMovieCard />
          </Grid>
        </motion.div>
      </Container>
    </Grid>
  );
};

export default SimilarMovieSection;
