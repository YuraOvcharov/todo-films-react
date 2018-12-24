import React, { Fragment, Component } from 'react';

import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Fab, withMobileDialog, FormControlLabel, Switch } from '@material-ui/core';


class BtnModal extends Component {
    state = {
        id: 0,
        name: '',
        nameError: false,
        film_date: '',
        film_dateError: false,
        director: '',
        directorError: false,
        duration: '',
        durationError: false,
        rating: '',
        ratingError: false,
        agree: false,
        open: false
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();
        const { name, film_date, director, duration, rating } = this.state;
        const dateNum = new Date();        
        this.props.handleAddFilms({
            id: dateNum.getTime(),
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
        this.handleClose();
    }
    handleBlur = (e) => {
        const { id, value } = e.currentTarget;

        if (id === "name") {
            if (value.trim().length < 1 || value.trim().length > 40) {
                this.setState({
                    nameError: true
                });
            } else {
                this.setState({ nameError: false, [id]: value.trim() });
            }
        }

        if (id === "film_date") {
            if (isNaN(Number(value)) || (Number(value) < 1800) || (Number(value) > 2018)) {
                this.setState({
                    film_dateError: true
                });
            } else {
                this.setState({ [id]: value, film_dateError: false });
            }
        }

        if (id === "director") {
            if (value.trim().length < 3 || value.trim().length > 40) {
                this.setState({
                    directorError: true
                });
            } else {
                this.setState({ [id]: value.trim(), directorError: false });
            }
        }

        if (id === "duration") {
            if (isNaN(Number(value)) || (Number(value) < 1) || (Number(value) > 300)) {
                this.setState({
                    durationError: true
                });
            } else {
                this.setState({ [id]: value, durationError: false });
            }
        }

        if (id === "rating") {
            //Если ввели НЕ число, то получаем NaN
            if (isNaN(Number(value)) || Number(value) < 0 || Number(value) > 10) {
                this.setState({
                    ratingError: true
                });
            } else {
                this.setState({ [id]: value, ratingError: false });
            }
        }
    }
    handleCheckboxChange = (e) => {
        this.setState({ agree: e.currentTarget.checked })
    }

    validate = () => {
        if (this.state.name.trim() && this.state.film_date && this.state.director.trim() && this.state.duration && this.state.rating && this.state.agree) {
            return true;
        }
        return false;
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <Fragment>
                <Fab className="btn-add-form" color="primary" aria-label="Add" onClick={this.handleClickOpen}>
                    <i className="fas fa-plus"></i>
                </Fab>

                <Dialog
                    fullScreen={this.props.fullScreen}
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">Форма добавления фильма</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id='name'
                            label="Название фильма"
                            type="text"
                            fullWidth
                            //onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            error={this.state.nameError}
                            helperText={this.state.nameError ? "Название должно быть от 1 до 40 символов" : ""}
                        />
                        <TextField
                            margin="dense"
                            id='film_date'
                            label="Год выпуска"
                            type="number"
                            fullWidth
                            onBlur={this.handleBlur}
                            //onChange={this.handleChange}
                            error={this.state.film_dateError}
                            helperText={this.state.film_dateError ? "Год должен быть от 1800 до 2018" : ""}
                        />
                        <TextField
                            margin="dense"
                            id='director'
                            label="ФИО режиссера"
                            type="text"
                            fullWidth
                            onBlur={this.handleBlur}
                            //onChange={this.handleChange}
                            error={this.state.directorError}
                            helperText={this.state.directorError ? "ФИО от 3 до 40 символов" : ""}

                        />
                        <TextField
                            margin='dense'
                            id="duration"
                            label="Продолжительность (в минутах)"
                            type="number"
                            fullWidth
                            onBlur={this.handleBlur}
                            //onChange={this.handleChange}
                            error={this.state.durationError}
                            helperText={this.state.durationError ? "Продолжительность от 1 до 300" : ""}
                        

                        />
                        <TextField
                            margin='dense'
                            id="rating"
                            label="Рейтинг от 0 до 10"
                            type="number"
                            fullWidth
                            onBlur={this.handleBlur}
                            //onChange={this.handleChange}
                            error={this.state.ratingError}
                            helperText={this.state.ratingError ? "Нужно ввести число от 0 до 10" : ""}
                        />
                        <FormControlLabel
                            id="checkboxAddFilm"
                            control={
                                <Switch
                                    color="primary"
                                    onChange={this.handleCheckboxChange}
                                />
                            }
                            label="Я подтверждаю, что знаю этот фильм"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Выход
                        </Button>
                        <Button disabled={!this.validate()} onClick={this.onBtnClickHandler} color="primary">
                            Добавить фильм
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}


export default withMobileDialog()(BtnModal);