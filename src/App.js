import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import './App.scss';

//import { Button } from 'reactstrap';


//import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
// import { Button } from '@material-ui/core';

import TopBar from './components/TopBar';
import AddFilm from './components/AddFilm';
import Films from './components/Films';



class App extends Component {
  state = {
    films: null,
    isLoading: false,
    lengthList: 0
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://localhost:3000/data/filmsData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTimeout(() => {
          this.setState({ isLoading: false, films: data })
        }, 1000) // изменил таймер на 1000, чтобы не ждать долго
      })
  }

  handleAddFilms = data => {
    data.id = this.state.films.length + 1;
    const nextFilm = [data, ...this.state.films]
    this.setState({ films: nextFilm })
  }

  render() {
    const { films, isLoading } = this.state;

    return (
      <div className="app">
        {/* Header */}
        <TopBar />

        {/* Форма добавления */}
        <AddFilm onAddFilms={this.handleAddFilms} />

        {/* Если данные загружаются*/}
        {isLoading && <p>Загружаю...</p>}

        {/* Когда данные загрузились */}
        {Array.isArray(films) && <Films data={films} />}

        {/* Кнопка для добавления нового фильма*/}
        <Fab className="btn-add-form" color="primary" aria-label="Add">
          <i className="fas fa-plus"></i>
        </Fab>
      </div>
    );
  }
}


// AddFilm.propTypes = {
//   onAddFilms: PropTypes.func.isRequired
// }

export default App;





