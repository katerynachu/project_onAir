import React, { Component } from 'react'
import logo from './logo.png'
import './logoHeader.scss'

export default class LogoHeader extends Component {
  render() {
    return (
      <div className='header__logo'>
        <img src={logo} alt='logo'></img>
      </div>
    )
  }
}
