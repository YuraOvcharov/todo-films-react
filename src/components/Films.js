import React from 'react'
import PropTypes from 'prop-types'
//import { CardFilm } from './CardFilm';


class Films extends React.Component {
  renderFilms = () => {
    const { data } = this.props
    let FilmsTemplate = null

    if (data.length) {
      FilmsTemplate = data.map(function(item) {
        return (<p key={item.id}>{item.name}</p>)
      })
    } else {
      FilmsTemplate = <p>К сожалению нет фильмов</p>
    }

    return FilmsTemplate
  }
  
  render() {
    return (
      <div>
        {this.renderFilms()}
      </div>
    )
  }
}
  
Films.propTypes = {
  data: PropTypes.array.isRequired,
}
  
export default Films;