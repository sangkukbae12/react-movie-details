import React from 'react';
import { Grid } from '@material-ui/core';
import Viewpager from '../components/Viewpager';

const ImageSection = () => {
  return (
    <Grid item xs={12} sm={12}>
      <div className="App">
        <div className="view-wrapper">
          <Viewpager />
        </div>
      </div>
    </Grid>
  );
};

export default ImageSection;
