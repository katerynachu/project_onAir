import React from 'react';
import Logo from '../universal/logo/Logo'
import Social from '../universal/social/Social';
import FooterForm from './footer-form/FooterForm';
import { useLocation} from 'react-router-dom';
import './footer.scss'



export default function Footer(props) {
    const location = useLocation();
    return (
        location.pathname !== '/login' &&
        <div className={`footer footer-${props.theme}`} id="footer">
            <div className='footer__container'>
             <div className='footer__wrapper'>
             <div className='footer__fist-block fist-block'>
                    <Logo/>
                    <p className='fist-block__desc'>
                        Hot Africa, we offer original, exclusive and premium stories. Everything you want to watch, anytime, anywhere and as much.
                    </p>
                    <Social/>
                    <p className='fist-block__copyright'>
                    Copyright © 2022 Hot Africa. All rights reserved.
                    </p>
                </div>
                {/* <div className='footer__second-block'>
                    <Menu/>
                </div> */}
                <div className='footer__third-block'>
                    <FooterForm theme={props.theme} />
                </div>
             </div>
            </div>
        </div>
    )
}
