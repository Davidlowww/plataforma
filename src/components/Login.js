import React, { useState } from 'react'
import "./Login.css"



const Login = () => {
    const [email, setEmail] = useState(2);
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
    <div className='login-container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}><div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}required/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input 
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}required
                />

            </div>
            <button type='submit'>login</button>
            <a href='/src/components/index.html'>index</a>
            </form>

    </div>
);
};

export default Login;