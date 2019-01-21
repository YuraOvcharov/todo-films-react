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
        return <CardFilm key={key} data={item} deleteFilm={deleteFilm} /> //key можно убрать? думаю, что да, потому что в item есть id из базы данных (локалхоста)
      })
    } else {
      FilmsTemplate = (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="films">
                <Typography component="p" className="text-for-info" align="center">
                  Sorry, but list of films is empty. You can add your lovely films, if you press plus
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