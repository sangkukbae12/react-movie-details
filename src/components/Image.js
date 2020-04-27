import React, { useState, useRef } from 'react';
import { motion, useDomEvent } from 'framer-motion';
import { makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '1%',
    boxShadow: theme.shadows[3],
  },
}));

export const Image = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [isOpen, setOpen] = useState(false);

  useDomEvent(useRef(window), 'scroll', () => isOpen && setOpen(false));

  return (
    <div className={`image-container ${isOpen ? 'open' : ''}`}>
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="shade"
        onClick={() => setOpen(false)}
      />
      <motion.img
        className={classes.img}
        src="https://image.tmdb.org/t/p/w342/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
        alt="Ad Astra"
        onClick={() => setOpen(!isOpen)}
        layoutTransition
        whileHover={{
          boxShadow: theme.shadows[9],
        }}
      />
    </div>
  );
};
