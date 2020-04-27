import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="transparent">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Button>
          {/* <Typography variant="h6" color="inherit"> */}
          MOVIES
          {/* </Typography> */}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
