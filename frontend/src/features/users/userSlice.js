import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import userService from './userService' 

const initialState = {
    users: [],
    isError: false,
    isLoading: false,
    isSucces: false,
    message: ''

}

export const createUser = createAsyncThunk ('users/create', async(userData, thunkAPI) => {
    try {
        return await userService.createUser(userData)
        
    } catch (error) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
       }
})

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSucces = true
            state.users.push(action.payload)
            console.log(state.users)
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message(action.payload)
        })
    }

})


export const {reset} = userSlice.actions
export default userSlice.reducer