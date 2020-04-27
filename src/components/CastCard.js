import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Grid,
  useTheme,
  CircularProgress,
} from '@material-ui/core';
import { motion } from 'framer-motion';
import castData from '../data/cast.json';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    width: '154px',
    height: '231px',
  },
});

const CastCard = () => {
  const [data] = useState(castData);
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      {!data ? (
        <CircularProgress />
      ) : (
        data.map(({ image, name, roleName }) => (
          <Grid item key={name}>
            <motion.div
              whileHover={{
                scale: 1.04,
                boxShadow: theme.shadows[9],
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Card className={classes.root} square>
                <CardContent>
                  <img className={classes.image} src={image} alt={name} />
                  <Typography
                    variant="subtitle1"
                    style={{ textAlign: 'center' }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    style={{ textAlign: 'center' }}
                  >
                    {roleName}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))
      )}
    </>
  );
};

export default CastCard;
