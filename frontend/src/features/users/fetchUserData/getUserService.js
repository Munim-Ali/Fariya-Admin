import axios from 'axios'

const GET_API_URL = 'http://localhost:8000/api/users/'

const getUser = async () => {
    console.log("Fetching data from DB", userData)

    const response = await axios.get(GET_API_URL)
    if(response.data) {
        localStorage.setItem('users', JSON.stringify(response.data))
    }

    return response.data
}

export default getUserService = {
    getUser
}