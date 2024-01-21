import React from 'react'
import './footer-form.scss'

export default function FooterForm(props) {
    return (
        <div className='third-block__form footer-form'>
            <div className='footer-form__content'>
                <p className='footer-form__title'>Newsletter</p>
                <p className='footer-form__desc'>Subscribe to our newsletter system now to get latest news from us</p>
            </div>
            <form className='footer-form__email'>
                <input className={`footer-form__input footer-form__input-${props.theme} `} name='email' required type='email' placeholder='Enter your email'></input>
                <button className='footer-form__btn' type="submit">subscribe</button>
            </form>
        </div>
    )
}
