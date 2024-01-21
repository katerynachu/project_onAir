// import Toggle from '../../universal/toggle/Toggle'
import RegistForm from './registration/RegistForm';
import SignInForm from './signin/SignInForm';
import { useState } from 'react';

export default function LoginForm(props) {

    const [checked,setChecked] = useState(false)

    function handleChange(){
      setChecked(!checked)
    }

    if(checked === true){
        return      <div className={`login__wrapper ${props.theme}`}>
        {/* <Toggle /> */}
        <div className='login__heading'>
           <h4 className='login__h4'>Login to get started</h4>
           <input onChange={handleChange} checked={checked} type="checkbox" id="switch" /><label for='switch' className='toggle'>Toggle</label>
           </div>
        <RegistForm btn='Registration' />
    </div>
    }
    return (
        <div className={`login__wrapper ${props.theme}`}>
            {/* <Toggle /> */}
           <div className='login__heading'>
           <h4 className='login__h4'>Login to get started</h4>
           <input onChange={handleChange} checked={checked} type="checkbox" id="switch" /><label for='switch' className='toggle'>Toggle</label>

           </div>
            <SignInForm btn='Sign in' />
        </div>
    )
}
