import React, { Component } from 'react';
//import axios from 'axios';
//import ReactDOM from 'react-dom';

import './App.scss';

//import { Button } from 'reactstrap';


import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

import TopBar from './components/TopBar';
import AddFilm from './components/AddFilm';
import Films from './components/Films';
import BtnModal from './components/BtnModal';
import axios from 'axios';

const apiUrl = './data/filmsData.json';


class App extends Component {
  state = {
    films: [],
    isLoading: true
  }

  componentDidMount() {
    let listFilms = [];
    //Если localStorage пуст, то положим 4 фильма из базы
    if ( localStorage.length === 0 ) {
      axios.get(apiUrl)
        .then( res => {
        const listDdFilms = res.data.map(function (item) {
          listFilms.unshift(item)
          let itemObj = JSON.stringify(item);
          localStorage.setItem(item.id, itemObj);
          return listFilms;
        });
        return listDdFilms;
      })
    } 

    //Достаем все из localStorage
    //Пройдемся по всем ключам, которые находятся в localStorage
    Object.keys(localStorage).map((film) => {
      //film это ключ из localStorage 
      //кладем object в listFilms
      listFilms.unshift(JSON.parse(localStorage.getItem(film)));
      return true;
    });
    setTimeout(() => {
      this.setState({ isLoading: false, films: listFilms });
    }, 1000); // изменил таймер на 1000, чтобы не ждать долго
  }

  handleAddFilms = data => {
    // const dateNum = new Date();
    // data.id = dateNum.getTime();
    const nextFilm = [data, ...this.state.films];
    this.setState({ films: nextFilm });

    let dataObj = JSON.stringify(data);
    localStorage.setItem(data.id, dataObj);
  }

  deleteFilm = idForDelete => {
    const films = this.state.films.filter(film => {
      return film.id !== idForDelete;
    })
    this.setState({
      films: films
    })

    localStorage.removeItem(idForDelete);

  }

  render() {
    const { films, isLoading } = this.state;

    return (
      <div className="app">
        {/* Header */}
        <TopBar />

        {/* Если данные загружаются*/}
        {isLoading &&
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="films">
                  <Typography component="p" className="text-for-info" align="center">
                    Секунду. Идет загрузка кинофильмов...
                  </Typography>
                </div>
              </div>
            </div>
          </div>

        }

        {/* Когда данные загрузились */}
        {Array.isArray(films) && !isLoading && <Films data={films} deleteFilm={this.deleteFilm} />}

        {/* Кнопка для добавления нового фильма*/}
        <BtnModal handleAddFilms={this.handleAddFilms} />

      </div>
    );
  }
}


AddFilm.propTypes = {
  onAddFilms: PropTypes.func.isRequired
}

export default App;





