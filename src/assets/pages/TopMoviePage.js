import React, { useEffect, useState } from "react";
import Movie from "../components/movie/movie-details/MovieCard";

export default function TopMoviePage() {
    const url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=b0e78e592507b4e646b187b356f28d6e";
    const [top, setTop] = useState([]);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        // console.log(movies);
        setTop(movies.results);
    };
    return (
        <div className="movie-page">
            <div className="movie-page__heading">
                <h1 className="movie-page__h1  center">TOPMovies</h1>
                {/* <button className="movie-page__btn btn">more</button> */}
            </div>
           <div className="movie-page__body">
                {/* <div className="popular-movies"> */}
                {top.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
                {/* </div> */}
           </div>
        </div>
    );
};






   