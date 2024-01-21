import { useState } from "react"
import MovieCard from "../movie-details/MovieCard";
import './search-film.scss'

export default function SearchFilm() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(null);

    // const paginate = (pageNumber) => {
    //     setCurrentPage(pageNumber);
    //     setMovies(pageNumber);
    // };

    const searchMovies = async (e,page=1) => {
        e.preventDefault()
        const url = `https://api.themoviedb.org/3/search/movie?api_key=b0e78e592507b4e646b187b356f28d6e&language=en-US&query=${query}&page=${page}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            // setTotalPages(data.total_pages);
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="search-film">
            <form className='search-film__form' onSubmit={searchMovies}>

                <input className="search-film__input" type='text' required name='query' placeholder='Enter the title of the movie'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)
                    }></input>
                <button className='search-film__button' type='submit'>
                    Search
                </button>
            </form>
            <div className='search-film__body'>
                {movies.filter(movie => movie.poster_path)
                    .map((movie) => (<MovieCard movie={movie} key={movie.id} />))
                }
                <div>
            </div>
        </div>
        </div>
    )
}





