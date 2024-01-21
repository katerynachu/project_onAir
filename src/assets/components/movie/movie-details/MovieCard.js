import React from 'react';
import './movie-card.scss'
import { Link } from "react-router-dom";
export default function MovieCard({ movie }) {


    let bg = {
        backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`
    }
    if (movie.backdrop_path == null) {
        // return    
        bg.backgroundImage = `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.poster_path})`
        
    }
  if(movie.release_date === ''){
    return movie.release_date = 'Unknown'
  }
    console.log(movie.release_date)
    return (
        // {movie.release_date == null}
        <div className='card' style={bg}>

            <div className='card__content'>
                <h3 className='card__title'>{movie.title}</h3>
                <p className='card__subtext'>
                RELEASE DATE: {movie.release_date}
                </p>
                <p className='card__subtext'>
                RATING: {movie.vote_average}
                </p>
                <p className='card__desc'>
                    {movie.overview}
                </p>
                <Link className="movie__link" to={`/movies/${movie.id}`}>
                    <button className="movie-page__btn">more</button>
                </Link>
            </div>
        </div>

    )
}