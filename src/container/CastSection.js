import React from 'react';
import { Grid, Container, Button, Typography } from '@material-ui/core';
import CastCard from '../components/CastCard';

const CastSection = () => {
  return (
    <Grid item container xs={12} sm={12}>
      <Container maxWidth="md">
        <Grid item xs={12} sm={12}>
          <Button style={{ marginBottom: '1rem' }}>
            <Typography variant="h6">Top Billed Cast</Typography>
          </Button>
        </Grid>
        <Grid item container justify="center" spacing={3}>
          <CastCard />
        </Grid>
      </Container>
    </Grid>
  );
};

export default CastSection;
