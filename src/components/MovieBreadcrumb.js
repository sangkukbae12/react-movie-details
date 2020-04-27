import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';

const MovieBreadcrumb = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Movies
      </Link>
      <Link
        color="inherit"
        href="/getting-started/installation/"
        onClick={handleClick}
      >
        In Theaters
      </Link>
      <Link
        color="textPrimary"
        href="/components/breadcrumbs/"
        onClick={handleClick}
        aria-current="page"
      >
        Ad Astra
      </Link>
    </Breadcrumbs>
  );
};

export default MovieBreadcrumb;
