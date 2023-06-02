// // includes an email input and a password input
// // On form submission, validate the inputs and display an error message if they are empty

import React, { useState } from 'react';


function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const detailsValidation = (e) => {
        e.preventDefault()
        console.log(`input: ${e}`);
        e.preventDefault()
        if (email.trim() || password.trim()) {
            console.log(`email ${email}`);
            console.log(`password: ${password}`);
        }
        else {
            alert("Email and password required!")
        }
    }
    return (
        <div className='login'>
            <div className='input-details'>
            <h1>Sign Up Page</h1>
                <form onSubmit={detailsValidation}>
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={email}
                        onChange={emailHandler}
                        className='email'
                    ></input>
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={passwordHandler}
                        className='password'
                    ></input>
                    <button
                        className='button'
                        onClick={detailsValidation}
                    >Login</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm;
