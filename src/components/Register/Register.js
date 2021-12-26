import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';

import { register, addUserToCollection } from '../../services/authService.js'
import { useAuthContext } from '../../contexts/AuthContext.js';
import './Register.css'

function Register() {
    const navigate = useNavigate();
    const [errorState, setErrorState] = useState("");
    const authData = useAuthContext();

    useEffect(() => {
        if (authData.user) {
            navigate('/profile');
        }
    }, [authData.user, navigate]);

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let confirmEmail = formData.get('confirm-email');
        let password = formData.get('password');
        let confirmPassword = formData.get('confirm-password');

        if (email === '' ||
            confirmEmail === '' ||
            email.length < 8 ||
            confirmEmail.length < 8) {
            setErrorState('Email and confirm email fields are required and should be at least 8 characters!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);
            
            return;
        }

        if (password === '' ||
            confirmPassword === '' ||
            password.length < 6 ||
            confirmPassword.length < 6) {
            setErrorState('Password and confirm password fields are required and should be at least 6 characters!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);
            
            return;
        }

        if (email !== confirmEmail) {
            setErrorState('Email and confirm email mismatch!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);

            return;
        }

        if (password !== confirmPassword) {
            setErrorState('Password and confirm password mismatch!');
            setTimeout(() => {
                setErrorState('');
            }, 10000);
            
            return;
        }

        register(email, password)
        .then((result) => {
            const userData = {
                id: result.user.uid,
                email: email,
                registrationDate: new Date().toLocaleString(),
                watchList: [],
                reviews: []
            }
            addUserToCollection(userData)

            navigate('/');
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrorState (errorMessage);
            setTimeout(() => {
                setErrorState('');
            }, 10000)
          });
    } 

    const registerClickErrorHandler = () => {
        setErrorState('');
        return;
    } 

    return (
        <section className="register">
            <h1 className="register-title">Sign Up</h1>
            <p className="register-text">Already have an account?
                <Link className="register-text-login" to="/login">Log In</Link>
            </p>
            <h6 className="register-error-message" onClick={ registerClickErrorHandler }>{errorState}</h6>
            <form className="register-form" method="POST" onSubmit={ registerSubmitHandler }>
                <div className="register-form-field-container"> 
                    <label htmlFor='email'>Email</label>
                    <input id="email" className="register-form-text" name="email" type="text"></input>
                </div>
                <div className="register-form-field-container">
                    <label htmlFor='confirm-email'>Confirm Email</label>
                    <input id="confirm-email" className="register-form-text" name="confirm-email" type="text"></input>
                </div>
                <div className="register-form-field-container">
                    <label htmlFor='password'>Password</label>
                    <input id="password" className="register-form-text" name="password" type="password"></input>
                </div>
                <div className="register-form-field-container">
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input id="confirm-password" className="register-form-text" name="confirm-password" type="password"></input>
                </div>
                <div className="register-form-field-container-button">
                    <input className="register-form-submit" type="submit" value="Sign Up"></input>
                </div>
            </form>
        </section>
    );
}

export default Register;