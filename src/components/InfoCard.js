import React from 'react';
import {
  Paper,
  Container,
  Grid,
  Typography,
  Button,
  makeStyles,
} from '@material-ui/core';
import { Image } from './Image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    boxShadow: theme.shadows[9],
  },

  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
}));

const InfoCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    // <div className={classes.root}>
    <Paper className={classes.paper} square elevation={3}>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            style={{ width: '50%' }}
          >
            <Image />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  Ad Astra
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  2019{bull}123 min{bull} Science Fiction {bull} Drama
                </Typography>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  Overview
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  The near future, a time when both hope and hardships drive
                  humanity to look to the stars and beyond. While a mysterious
                  phenomenon menaces to destroy life on planet Earth, astronaut
                  Roy McBride undertakes a mission across the immensity of space
                  and its many perils to uncover the truth about a lost
                  expedition that decades before boldly faced emptiness and
                  silence in search of the unknown.
                </Typography>
                <br />
                <br />
                <br />
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Producer: Brad Pitt
                  <br />
                  Producer: Arnon Milchan
                  <br />
                  Sound Designer: Gary Rydstrom
                  <br />
                  Supervising Sound Editor: Gary Rydstrom
                  <br />
                </Typography>
              </Grid>
              <Grid item>
                <Button color="primary">Watch Trailer</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Paper>
    // </div>
  );
};

export default InfoCard;
