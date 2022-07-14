import axios from 'axios'

const API_URL = 'http://localhost:8000/api/register/'

//Register person
const register = async (personData) => {
    const response = await axios.post(API_URL, personData)

    if(response.data) {
        localStorage.setItem('person', JSON.stringify(response.data))
    }

    return response.data

}

//Login person
const login = async (personData) => {
    const response = await axios.post(API_URL + 'login', personData)

    if(response.data) {
        localStorage.setItem('person', JSON.stringify(response.data))
    }

    return response.data

}

//Logout User
const logout = () => {
    localStorage.removeItem('person')
}

const authService = {
    register,
    logout,
    login
}

export default authService