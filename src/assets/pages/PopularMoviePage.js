import React, { useEffect, useState } from "react";
import Movie from "../components/movie/movie-details/MovieCard";

const PopularMovie = () => {
    const url =
        "https://api.themoviedb.org/3/movie/popular?api_key=b0e78e592507b4e646b187b356f28d6e&language=en-US&page=1";
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        // console.log(movies);
        setPopular(movies.results);
    };

    return (
        <div className="movie-page">
            <div className="movie-page__heading">
                <h1 className="movie-page__h1  center">Movies</h1>
            </div>
           <div className="movie-page__body">
                {/* <div className="popular-movies"> */}
                {popular.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
                {/* </div> */}
           </div>
        </div>
    );
};
export default PopularMovie;