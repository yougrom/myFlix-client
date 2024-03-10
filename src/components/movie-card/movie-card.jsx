import React from 'react';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div onClick={() => onMovieClick(movie)}>
            {movie.Title}
        </div>
    );
};

// PropTypes for MovieCard
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string,
        Genre: PropTypes.shape({
            Name: PropTypes.string,
            Description: PropTypes.string,
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string,
            Bio: PropTypes.string,
            Birth: PropTypes.string,
        }),
        ImagePath: PropTypes.string,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,
};