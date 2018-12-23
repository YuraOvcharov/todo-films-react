import React from 'react'

class AddFilm extends React.Component {
    state = {
        name: '',
        film_date: '',
        director: '',
        duration: '',
        rating: '',
        agree: false,
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const { name, film_date, director, duration, rating} = this.state;
        this.props.onAddFilms({
            name,
            film_date,
            director,
            duration,
            rating
        });
        this.setState({
            name: '',
            film_date: '',
            director: '',
            duration: '',
            rating: '',
            agree: false
        });
        document.getElementById("checkboxAddFilm").checked = false;
    }
    handleChange = (e) => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: value })
    }
    handleCheckboxChange = (e) => {
        this.setState({ agree: e.currentTarget.checked })
    }
    validate = () => {
        const { name, film_date, director, duration, rating, agree } = this.state;
        if (name.trim() && film_date.trim() && director.trim() && duration.trim() && rating.trim() && agree) {
            return true;
        }
        return false;
    }

    render() {
        const { name, film_date, director, duration, rating, } = this.state
        return (
            <form>
                <input
                    id='name'
                    type='text'
                    onChange={this.handleChange}
                    placeholder='Ваше имя'
                    value={name}
                />
                <input
                    id='film_date'
                    type='text'
                    onChange={this.handleChange}
                    className=''
                    placeholder='Ваше имя'
                    value={film_date}
                />
                <input
                    id='director'
                    type='text'
                    onChange={this.handleChange}
                    className=''
                    placeholder='Ваше имя'
                    value={director}
                />
                <input
                    id='duration'
                    type='text'
                    onChange={this.handleChange}
                    className=''
                    placeholder='Ваше имя'
                    value={duration}
                />
                <input
                    id='rating'
                    type='text'
                    onChange={this.handleChange}
                    className=''
                    placeholder='Ваше имя'
                    value={rating}
                />

                <label className=''>
                    <input id="checkboxAddFilm" type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
                </label>
                <button
                    className=''
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                >
                    Добавить фильм
                </button>
            </form>
        )
    }
}

export default AddFilm;