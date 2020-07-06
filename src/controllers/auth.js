import axios from 'axios'

const baseUrl = "http://localhost:8080"

export const login = async ({ name, pswd }) => {
    await axios.post(`${baseUrl}/login`, { name, pswd }).then(response => {
        const { token } = response.data
        localStorage.setItem('authToken', token)
    });
}

export const logout = () => {
    localStorage.removeItem('authToken')
}

