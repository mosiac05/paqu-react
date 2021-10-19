import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/http";

export const fetchUniversities = createAsyncThunk(
    'universities/fetchUniversitiesStatus',
    async () => {
        const responseData = await fetchData('universities')
        return responseData
    }
)

const initialState = {
    universities: []
}

const universitySlice = createSlice({
    name: 'university',
    initialState,
    reducers: {},    
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchUniversities.fulfilled, (state, action) => {
        // Store universities to the state array
        state.universities = action.payload
        })
    },
})

export const universityActions = universitySlice.actions

export default universitySlice.reducer