import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/http";

export const fetchCourses = createAsyncThunk(
    'courses/fetchCoursesStatus',
    async () => {
        const responseData = await fetchData('courses')
        return responseData
    }
)

const initialState = {
    courses: []
}

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(fetchCourses.fulfilled, (state, action) => {
            state.courses = action.payload
        })
    }
})

export const coursesActions = courseSlice.actions
export default courseSlice.reducer