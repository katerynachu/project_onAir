import React from 'react'
import { Link } from 'react-router-dom';
import './search.scss'
import icon from './search.png'
export default function Search() {
  return (
    <div className='header__search search'>
      <Link className='search__link' to='/search'>
       <img className='search__img' src={icon} alt="search icon"></img>
       </Link>
    </div>
  )
}


