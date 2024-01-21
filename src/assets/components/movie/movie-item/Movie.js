import React from "react";
import './movie.scss'
import { Link } from "react-router-dom";
const Movie = ({movie}) => {
  return (
 <Link  className="movie__link" to={`/movie/${movie.id}`}>
    <div className="movie">
   <div className="movie__block">
      <img className="movie__img" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.path} />
      <span
            className={`movie__average ${
              movie.vote_average >= 8 ? "green" : movie.vote_average >= 6 ? "orange" : "red"
            }`}
          >
            {movie.vote_average}
          </span>
   </div>
   <h5 className="movie__title">{movie.title}</h5>
    </div></Link>
  );
};
export default Movie;