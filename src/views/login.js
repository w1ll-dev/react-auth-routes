import React, { useState } from 'react'
import { login } from '../controllers/auth'

const Login = ({ history }) => {
    const [name, changeName] = useState('')
    const [pswd, changePswd] = useState('')

    const tryLogin = async ({ name, pswd }) => {
        await login({ name, pswd });
        history.push('/private');
    }
    console.log(localStorage.getItem('authToken'))

    return <div className="App">
        <input type="text" onChange={(e) => changeName(e.target.value)} />
        <input type="text" onChange={(e) => changePswd(e.target.value)} />
        <button onClick={() => tryLogin({ name, pswd })}>login</button>
    </div>
}

export default Login