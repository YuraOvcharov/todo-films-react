import React from 'react';
import PropTypes from 'prop-types';
import CardFilm from './CardFilm';


class Films extends React.Component {

  renderFilms = () => {
    const { data, deleteFilm } = this.props;
    let FilmsTemplate = null;

    if (data.length) {
      FilmsTemplate = data.map(function (item) {
        let key = item.id;
        // let itemObj = JSON.stringify(item);
        // localStorage.setItem(key, itemObj);
        return <CardFilm key={key} data={item} deleteFilm={deleteFilm}/>
      })
    } else {
      FilmsTemplate = <p>К сожалению список фильмов пуст</p>
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