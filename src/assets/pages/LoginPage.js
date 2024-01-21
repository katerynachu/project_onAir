import React from 'react'
import LoginMain from '../components/login/LoginMain'


export default function LoginPage(props) {
  return (
    <div className='login'>
    <LoginMain theme={props.theme}/>
    </div>
  )
}

