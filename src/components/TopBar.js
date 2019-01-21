import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import { Typography, Toolbar } from '@material-ui/core';

const TopBar = () => {
  return (
    <Fragment>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            List of films
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default TopBar;