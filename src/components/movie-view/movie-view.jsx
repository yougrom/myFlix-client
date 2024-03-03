import React from 'react';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div className="movie-view">
            <div className="movie-poster">
                <img src={movie.ImagePath} alt={`The poster for ${movie.Title}`} />
            </div>
            <div className="movie-title">
                <h1>{movie.Title}</h1>
            </div>
            <div className="movie-description">
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            <div className="movie-genre">
                <h2>Genre</h2>
                <div className="genre-name">{movie.Genre.Name}</div>
                <div className="genre-description">{movie.Genre.Description}</div>
            </div>
            <div className="movie-director">
                <h2>Director</h2>
                <div className="director-name">{movie.Director.Name}</div>
                <div className="director-bio">{movie.Director.Bio}</div>
                <div className="director-birth">Born: {new Date(movie.Director.Birth).toLocaleDateString()}</div>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};
