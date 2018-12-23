import React from 'react';
import PropTypes from 'prop-types';
import CardFilm from './CardFilm';
import { Typography } from '@material-ui/core';


class Films extends React.Component {

  renderFilms = () => {
    const { data, deleteFilm } = this.props;
    let FilmsTemplate = null;

    if (data.length) {
      FilmsTemplate = data.map(function (item) {
        let key = item.id;
        // let itemObj = JSON.stringify(item);
        // localStorage.setItem(key, itemObj);
        return <CardFilm key={key} data={item} deleteFilm={deleteFilm} />
      })
    } else {
      FilmsTemplate = (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="films">
                <Typography component="p" className="text-for-info" align="center">
                  К сожалению, список кинофильмов пуст. Вы можете добавить свои любимые фильмы, если нажмете на плюс.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return FilmsTemplate
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="films">
              {this.renderFilms()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Films.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Films;