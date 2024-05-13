import React from 'react';

const MovieCard = ({ movie, onDelete, onEdit }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterImg} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.releaseYear}</p>
        <p>{movie.genre}</p>
      </div>
      <div className="button-container">
        <button onClick={() => onEdit(movie)}>Edit</button>
        <button onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </div>
  );
};

export default MovieCard;
