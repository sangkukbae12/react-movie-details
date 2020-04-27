import React from 'react';
import { Grid, Container, Button, Typography } from '@material-ui/core';
import ReviewsCard from '../components/ReviewsCard';

const ReviewSection = () => {
  return (
    <Grid item container xs={12} sm={12}>
      <Container maxWidth="md">
        <Grid item xs={12} sm={12}>
          <Button style={{ marginBottom: '1rem' }}>
            <Typography variant="h6">Reviews</Typography>
          </Button>
        </Grid>
        <Grid item container justify="center" spacing={3}>
          <ReviewsCard />
        </Grid>
      </Container>
    </Grid>
  );
};

export default ReviewSection;
