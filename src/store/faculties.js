import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/http";

export const fetchFaculties = createAsyncThunk(
    'faculties/fetchFacultiesStatus',
    async () => {
        const responseData = await fetchData('faculties')
        return responseData
    }
)

const initialState = {
    faculties: []
}

const facultySlice = createSlice({
    name: 'faculties',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFaculties.fulfilled, (state, action) => {
            state.faculties = action.payload
        })
    }
})

export const facultyActions = facultySlice.actions

export default facultySlice.reducer