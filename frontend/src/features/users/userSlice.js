import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    users: [],
    isError: false,
    isLoading: false,
    isSucces: false,
    message: ''

}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => initialState
    }

})


export const {reset} = userSlice.actions
export default userSlice.reducer