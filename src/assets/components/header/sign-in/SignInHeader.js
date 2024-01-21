
import React from 'react';
import './signIn.scss';
import avatar from './avatar.png'
import { Link } from 'react-router-dom';
export default function SignInHeader() {
  return (
    <div className='header__signin signin'>
      <Link to='/login'>
        <img className='signin__img' src={avatar} alt="avatar icon"></img></Link>
    </div>
  )
}
