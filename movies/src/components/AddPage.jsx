import React from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { useMutation } from '@reduxjs/toolkit/query/react';
import { moviesApi } from '../features/movies/moviesApi';

const AddPage = () => {
  const history = useHistory();
  const { mutate: addMovie } = useMutation(moviesApi.addMovie);

  const formik = useFormik({
    initialValues: {
      title: '',
      posterImg: '',
      releaseYear: '',
      genre: '',
    },
    onSubmit: async (values) => {
      try {
        await addMovie(values);
        history.push('/');
      } catch (error) {
        console.error('Error adding movie: ', error);
      }
    },
  });

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label htmlFor="posterImg">Poster Image URL</label>
        <input
          id="posterImg"
          name="posterImg"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.posterImg}
        />

        <label htmlFor="releaseYear">Release Year</label>
        <input
          id="releaseYear"
          name="releaseYear"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.releaseYear}
        />

        <label htmlFor="genre">Genre</label>
        <input
          id="genre"
          name="genre"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.genre}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddPage;
