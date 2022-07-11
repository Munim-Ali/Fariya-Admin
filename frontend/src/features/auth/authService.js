import axios from 'axios'

const API_URL = '/api/register/'

//Register person
const register = async (personData) => {
    const response = await axios.post(API_URL, personData)

    if(response.data) {
        localStorage.setItem('person', JSON.stringify(response.data))
    }

    return response.data

}

const authService = {
    register
}

export default authService