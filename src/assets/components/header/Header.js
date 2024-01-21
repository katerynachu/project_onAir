import React from 'react';
import Logo from '../universal/logo/Logo.js';
import Menu from '../universal/nav/Menu.js';
import SignInHeader from './sign-in/SignInHeader';
import './header.scss'
import '../universal/nav/menu.scss'
import Search from './search/Search';
import { Link ,useLocation} from 'react-router-dom';


export default function Header(props) {

    const location = useLocation();
    return (
        location.pathname !== '/login' &&
        <div className='header' id="header">
            <div className='header__container'>
                <div className='header__wrapper'>
                    <div className='header__block'>
                        <Link to='/'>
                            <Logo /></Link>
                        <Menu theme={props.theme} />
                    </div>
                    <div className='header__block'>
                        <Search />
                        <SignInHeader />
                    </div>
                </div>
            </div>
        </div>
    )
}

