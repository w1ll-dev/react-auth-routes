import axios from 'axios'
const baseUrl = "http://localhost:8080"
export const login = async ({ name, pswd }) => {
    const response = await axios.post(`${baseUrl}/login`, { name, pswd });
    console.log(response.data)
}
