import React, { useEffect, useState } from "react";
import Movie from "../components/movie/movie-details/MovieCard";




export default function Upcoming() {
    const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=b0e78e592507b4e646b187b356f28d6e";
    const [coming, setComing] = useState([]);
    useEffect(() => {
        fetchPopular();
    }, []);
    const fetchPopular = async () => {
        const data = await fetch(url);
        const movies = await data.json();
        // console.log(movies);
        setComing(movies.results);
    };
    return (
        <div className="movie-page">
            <div className="movie-page__heading">
                <h1 className="movie-page__h1  center">UPCOMING</h1>
            </div>
          <div className="movie-page__body">
            
               {coming.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
          </div>
        </div>
    );
};
