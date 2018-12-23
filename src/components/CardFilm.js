import React from 'react';
//import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';


class CardFilm extends React.Component {
    render() {
        const { id, name, film_date, director, duration, rating } = this.props.data;
        let cardName = name + " (" + film_date + ")";
        let cardDuration = duration + " мин."


        return (
            <Card className="ccard">
                <CardHeader
                    action={
                        <IconButton onClick={() => {this.props.deleteFilm(id)}}>
                            <i className="fas fa-trash-alt" ></i>
                        </IconButton>
                    }
                    title={cardName}
                    subheader={cardDuration}
                />
                <CardContent>
                    <Typography component="p">
                        <i className="fas fa-star"></i> {rating}
                    </Typography>
                    <Typography component="p">
                        Режиссёр: {director}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default CardFilm;