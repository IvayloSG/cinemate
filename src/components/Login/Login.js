import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import { useAuthContext } from '../../contexts/AuthContext.js';
import { login } from '../../services/authService.js'
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const authData = useAuthContext();
    const [errorState, setErrorState] = useState('');

    if (authData.user) {
        navigate('/profile');
    }

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');

        if (email === '') {
            setErrorState('Email field is required!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);

            return;
        }

        if (password === '') {
            setErrorState('Password field is required!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);

            return;
        }

        login(email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                setErrorState(error.message);

                setTimeout(() => {
                    setErrorState('');
                }, 10000);
            });
    }

    const loginClickErrorHandler = () => {
        setErrorState('');
        return;
    }

    return (
        <section className="login">
            <h1 className="login-title">Sign In</h1>
            <p className="login-text">You dont have an account?
                <Link className="login-text-register" to="/register">Sign Up</Link>
            </p>
            <h6 className="login-error-message" onClick={loginClickErrorHandler}>{errorState}</h6>
            <form className="login-form" method="POST" onSubmit={loginSubmitHandler}>
                <div className="login-form-field-container">
                    <label htmlFor='email'>Email</label>
                    <input id="email" className="login-form-text" name="email" type="text"></input>
                </div>
                <div className="login-form-field-container">
                    <label htmlFor='password'>Password</label>
                    <input id="password" className="login-form-text" name="password" type="password"></input>
                </div>
                <div className="login-form-field-container-button">
                    <input className="login-form-submit" type="submit" value="Sign In"></input>
                </div>
            </form>
        </section>
    );
}

export default Login;