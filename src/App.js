import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './App.scss';

//import { Button } from 'reactstrap';


//import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import { Button } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Fab className="btn-add-form" color="primary" aria-label="Add">
          <i class="fas fa-plus"></i>
        </Fab>
      </div>
    );
  }
}

export default App;
