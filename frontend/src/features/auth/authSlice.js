import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


//Get Person from localStorage
const person = JSON.parse(localStorage.getItem('person'))

const initialState = {
    person: person ? person : null,
    isError: false,
    isLoading: false,
    message: ''
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) =>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = '' 
        }

    },
    extraReducers: () =>{

    }

})

export const {reset} =authSlice.actions
export default authSlice.reducer