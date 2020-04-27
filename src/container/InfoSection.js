import React from 'react';
import { Grid } from '@material-ui/core';
import InfoCard from '../components/InfoCard';

const InfoSection = () => {
  return (
    <Grid item xs={12} sm={12} style={{ marginTop: '120vh' }}>
      <InfoCard />
    </Grid>
  );
};

export default InfoSection;
