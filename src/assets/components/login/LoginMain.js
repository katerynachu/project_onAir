import React from 'react'
import { Link } from 'react-router-dom';
import LoginForm from './login-form/LoginForm'
import './login-main.scss'
import Logo from '../universal/logo/Logo'


export default function Login(props) {
  return (
    <div className='login'>

      <div className='login__logo'>
        <Logo />
      </div>
      <LoginForm theme={props.theme} />
      <Link className='login__back' to='/'>  <div className='login__backto' >Back to website</div></Link>
    </div>
  )
}
