import React from 'react'
import './dark-mode.scss'


export default function DarkMode(props) {
  return (
    <div className="theme-container shadow-dark">
    <img onClick={props.toggleTheme} id="theme-icon"    src="https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg" alt="ERR"/>
  </div>

  )
}



