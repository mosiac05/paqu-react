import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk(
    'courses/fetchCoursesStatus',
    async () => {
        try {
            const response = await fetch(`https://paqu-app-default-rtdb.firebaseio.com/courses.json`)
            
            if(!response.ok) {
                return []
            }
    
            const data = await response.json()
            const results = []
    
            for (const key in data) {
                const itemData = {id: key}
                for (const itemKey in data[key]) {
                    if(itemKey !== 'id') {
                        itemData[itemKey] = data[key][itemKey]
                    }
                }
                results.push(itemData)
            }
            return results
        } catch(error) {
            return []
        }
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