import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, handleDelete, search, rate}) => {
    return (
        <div className="container">
          <div className="movieList">
        {movies
          .filter(
            (el) =>
              el.title.toUpperCase().includes(search.toUpperCase()) &&
              el.rating >= rate
          )
          .map((el, index) => (
            <MovieCard el={el} 
            handleDelete={handleDelete}/>
          ))}
      </div>
    </div>
  );
};

export default MovieList
