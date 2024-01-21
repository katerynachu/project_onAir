import React from 'react';
import facebook from './social_img/facebook.svg';
import instagram from './social_img/instagram.svg'
import twitter from './social_img/twitter.svg';
import youtube from './social_img/youtube.svg'
import './social.scss'

export default function Social() {
    const icons = [
        {
            src: facebook,
            alt:'facebook',
            link:'https://www.facebook.com/'
        },
        {
            src: instagram,
            alt:'instagram',
            link:'https://www.instagram.com/'
        },
        {
            src: twitter,
            alt:'twitter',
            link:'https://twitter.com/'
        },
        {
            src: youtube,
            alt:'youtube',
            link:'https://www.youtube.com/'
        }

    ]
    return (
        <div className='fist-block__social social'>
            {icons.map((icon, index) => <a className='social__link' target='blanck' href={icon.link} key={index}>
           <img src={icon.src} alt={icon.alt}>
           </img>
         </a>)}
        </div>
    )
}
