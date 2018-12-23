import React, { Component } from 'react';
//import axios from 'axios';
//import ReactDOM from 'react-dom';

import './App.scss';

//import { Button } from 'reactstrap';


import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
// import { Button } from '@material-ui/core';

import TopBar from './components/TopBar';
import AddFilm from './components/AddFilm';
import Films from './components/Films';

//const apiUrl = 'http://localhost:3000/data/filmsData.json';


class App extends Component {
  state = {
    films: [],
    isLoading: true
  }

  componentDidMount() {
    //Достаем все из localStorage
    let listFilms = [];
    Object.keys(localStorage).map((film) => {
      //film it is key for localStorage
      listFilms.push(JSON.parse(localStorage.getItem(film)));
      return true;
    });
    setTimeout(() => {
      this.setState({ isLoading: false, films: listFilms });
    }, 1000); // изменил таймер на 1000, чтобы не ждать долго
  }

  handleAddFilms = data => {
    const dateNum = new Date();
    data.id = dateNum.getTime();
    const nextFilm = [data, ...this.state.films]
    this.setState({ films: nextFilm });


    let dataObj = JSON.stringify(data);
    localStorage.setItem(data.id, dataObj);

    //axios.pop in local Storage
  }

  deleteFilm = idForDelete => {
    const films = this.state.films.filter(film => {
      return film.id !== idForDelete;
    })
    this.setState({
      films: films
    })
    console.log(idForDelete);

    localStorage.removeItem(idForDelete);



    // //Достаем все из localStorage
    // let listFilms = [];
    // Object.keys(localStorage).map((film) => {
    //   //film it is key
    //   listFilms.push(JSON.parse(localStorage.getItem(film)));
    // });
    // setTimeout(() => {
    //   this.setState({ isLoading: false, films: listFilms });
    // }, 1000); // изменил таймер на 1000, чтобы не ждать долго


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
        {Array.isArray(films) && !isLoading && <Films data={films} deleteFilm={this.deleteFilm} />}

        {/* Кнопка для добавления нового фильма*/}
        <Fab className="btn-add-form" color="primary" aria-label="Add">
          <i className="fas fa-plus"></i>
        </Fab>
      </div>
    );
  }
}


AddFilm.propTypes = {
  onAddFilms: PropTypes.func.isRequired
}

export default App;





