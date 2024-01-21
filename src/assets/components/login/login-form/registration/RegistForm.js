import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export default function RegistForm(props) {
    const [sucse, setSucse] = useState(false);
    const [name, setName] = useState('User');





    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        mode: "all"
    });
    const onSubmit = data => {
        console.log(data);
        reset()
        setSucse(true)
        setName(data.userName)
    }


    if (sucse === true) {
        return <div className="login__message"><p className="login__text">Thanks for registration <span className="login__username">{name}</span></p>
        <div class="dummy-positioning d-flex">
  
  <div class="success-icon">
    <div class="success-icon__tip"></div>
    <div class="success-icon__long"></div>
  </div>
  
</div>
            <Link className='login__back' to='/'>  <div className='login__backto' >Back to website</div></Link>
        </div>
    }

    return (
        <form className='login-form' method='get' onSubmit={handleSubmit(onSubmit)}  >
            <div className='login__inputs'>
                <input className={`login__name  login__name-${props.theme}`} {...register("userName", {
                    required: "Username is required",
                    minLength: {
                        value: 3,
                        message: "Username must be atleast 3 characters long"
                    },
                    maxLength: {
                        value: 30,
                        message: "Username must be atmost 30 characters long"
                    }
                })} placeholder="Please enter your name" ></input>
                <p>  {errors.userName?.message}</p>
                <input className={`login__email  login__email-${props.theme}`} {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Please enter a valid email',
                    }
                })} placeholder="Please enter Email address" />
                <p>  {errors.email?.message}</p>
                <input className={`login__password login__password-${props.theme}`} {...register("password", {
                    required: "Password is required",
                    pattern: {
                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                        message: "Password must be more then 6 characters,One upercase,One Lowercase<One number and one special symbol"
                    }

                })} type="password" placeholder="Enter your password.." ></input>
                <p>{errors.password?.message}</p>
            </div>
            <div>
                <button className='login__btn' type='submit'>{props.btn}</button>
                <p className='login__forgot'>Forgot password?</p>
            </div>
        </form>
    )

}
