import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, selectAllMovies } from '../features/movies/moviesSlice';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderPage = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log("Deleting movie with id:", id);
  };

  return (
    <div>
      <h1>Movies</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div>
              <img src={movie.posterImg} alt={movie.title} />
              <h3>{movie.title}</h3>
              <Link to={`/detail/${movie.id}`}>Detail</Link>
              <button onClick={() => handleDelete(movie.id)}>Delete</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPage;
