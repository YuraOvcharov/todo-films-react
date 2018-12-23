import React from 'react'
import PropTypes from 'prop-types'
import CardFilm from './CardFilm';


class Films extends React.Component {
  renderFilms = () => {
    const { data } = this.props
    let FilmsTemplate = null

    if (data.length) {
      FilmsTemplate = data.map(function (item) {
        return <CardFilm key={item.id} data={item} />
      })
    } else {
      FilmsTemplate = <p>К сожалению нет фильмов</p>
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