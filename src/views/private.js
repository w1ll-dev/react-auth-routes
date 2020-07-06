import React from 'react'
import { logout } from '../controllers/auth'

const Private = ({ history }) => {
    const tryLogout = () => {
        logout()
        history.push('/')
    }
    return <div>
        <h1>This is a private route</h1>
        <button onClick={tryLogout}>logout</button>
    </div>
}

export default Private