import React from 'react'
import SearchFilm from '../components/movie/search-movie/SearchFilm'
import SortBy from '../components/universal/sort/SortBy'

export default function SearchPage() {
    return (
        <div className='search-page'>
            <div className='search-page__heading'>
                <div className='search-page__sort'>
                    <SortBy/>
                </div>
                <div className='search-page__search'>
                   <SearchFilm/>
                </div>
            </div>
            <div className='search-page__content'></div>
        </div>
    )
}
