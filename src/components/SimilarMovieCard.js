import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  makeStyles,
  Grid,
  CircularProgress,
} from '@material-ui/core';
import similarMovieData from '../data/similarMovies.json';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: 220,
    cursor: 'grab',
    margin: '1rem',
    '&:active': {
      cursor: 'grabbing',
    },
  },
  cover: {
    width: 160,
    boxShadow: theme.shadows[12],
  },
}));

const SimilarMovieCard = () => {
  const [simiarMovies] = useState(similarMovieData);
  const classes = useStyles();

  return (
    <>
      {!simiarMovies ? (
        <CircularProgress />
      ) : (
        simiarMovies.map(({ title, image }) => (
          <Grid item key={title}>
            <motion.div whileHover={{ scale: 1.2 }}>
              <Card className={classes.root} square>
                <CardMedia className={classes.cover} image={image} />
              </Card>
            </motion.div>
          </Grid>
        ))
      )}
    </>
  );
};

export default SimilarMovieCard;
