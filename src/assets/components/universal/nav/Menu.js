
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BurgerMenu from '../burger/BurgerMenu';
// import './menu.scss'

const routes = [
  {
    to: '/',
    title: "Home"
  },
  {
    to: '/movies',
    title: 'TOP'
  },
  {
    to:'/popular',
    title: 'Popular'
  },
  {
    to: '/upcoming',
    title:'UPComing'
  }
]




export default function MenuHeader(props) {
  const [burgerMenuOpen,setburgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () =>{
    setburgerMenuOpen(!burgerMenuOpen)
  }
 let  burg = {
    display:`${burgerMenuOpen ? 'flex' : 'none'}`
  }
if(window.innerWidth > 1050){
  burg.display = 'flex'
}
  
  return (
  <div className='block-menu'>
      <nav>
      <ul className={`menu  menu-${props.theme}`}  style={burg}  >
        {routes.map((route, index) => <li key={index}>
          <Link className='menu__link' to={route.to}>
            {route.title}
          </Link>
        </li>)}
      </ul>
    </nav>
    <div className='burger-menu 'onClick={toggleBurgerMenu}>
    <BurgerMenu isOpen = {burgerMenuOpen} />
    </div>
      
  </div>
  )
}
