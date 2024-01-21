import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../movie-block.scss'
import Movie from "../movie-item/Movie";
import { Link } from "react-router-dom";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 810,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 586,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
};



export default function TopMovie() {
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
                <h1 className="movie-page__h1">TOPMovies</h1>
             <Link to='/movies'>   <button className="movie-page__btn btn">more</button></Link>
            </div>
           <div className="movie-page__body">
           <Slider {...settings} className="slider">
                {/* <div className="popular-movies"> */}
                {top.map((movie) => {
                    return <Movie key={movie.id} movie={movie} />;
                })}
                {/* </div> */}
            </Slider>
           </div>
        </div>
    );
};

