import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Grid,
  CircularProgress,
  useTheme,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import reviesData from '../data/reviews.json';
import { motion, AnimatePresence } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 700,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ReviewsCard = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReivews] = useState(reviesData);

  const handleExpandClick = (id) => {
    if (Object.keys(expanded).join() === id) {
      return setExpanded(
        expanded[id] === true ? { [id]: false } : { [id]: true }
      );
    } else {
      return setExpanded({ [id]: true });
    }
  };

  return (
    <>
      {!reviews && !expanded ? (
        <CircularProgress />
      ) : (
        reviews.map(({ id, date, title, review }) => (
          <Grid item key={id}>
            <motion.div
              whileHover={{
                boxShadow: theme.shadows[6],
              }}
            >
              <Card className={classes.root} square>
                <CardHeader
                  avatar={
                    <Avatar aria-label="reviews" className={classes.avatar}>
                      {id[0].toUpperCase()}
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={title}
                  subheader={date}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {review}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded[id],
                    })}
                    onClick={() => handleExpandClick(id)}
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <AnimatePresence initial={false}>
                  {expanded[id] && (
                    <motion.section
                      key={id}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                    >
                      <motion.div
                        variants={{
                          collapsed: { scale: 0.8 },
                          open: { scale: 1 },
                        }}
                        transition={{ duration: 0.4 }}
                        className="content-placeholder"
                      >
                        <CardContent>
                          <Typography paragraph>
                            {review}
                            {review}
                            {review}
                          </Typography>
                        </CardContent>
                      </motion.div>
                    </motion.section>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          </Grid>
        ))
      )}
    </>
  );
};

export default ReviewsCard;
