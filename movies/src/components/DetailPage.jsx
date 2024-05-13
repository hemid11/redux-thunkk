import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMutation } from '@reduxjs/toolkit/query/react';
import { moviesApi } from '../features/movies/moviesApi';

const EditModal = ({ movie, onClose }) => {
  const [editedMovie, setEditedMovie] = useState(movie);
  const dispatch = useDispatch();
  const history = useHistory();
  const [updateMovie] = useMutation(moviesApi.updateMovie);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMovie({ ...editedMovie, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateMovie(editedMovie);
      onClose();
      history.push('/');
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Movie</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            value={editedMovie.title}
            onChange={handleChange}
          />
          <label htmlFor="posterImg">Poster Image URL</label>
          <input
            id="posterImg"
            name="posterImg"
            type="text"
            value={editedMovie.posterImg}
            onChange={handleChange}
          />
          <label htmlFor="releaseYear">Release Year</label>
          <input
            id="releaseYear"
            name="releaseYear"
            type="text"
            value={editedMovie.releaseYear}
            onChange={handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            name="genre"
            type="text"
            value={editedMovie.genre}
            onChange={handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
