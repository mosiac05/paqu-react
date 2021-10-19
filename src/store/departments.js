import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../utils/http'

export const fetchDepartments = createAsyncThunk(
    'departments/fetchDepartmentsStatus',
    async () => {
        const responseData = await fetchData('departments')
        return responseData
    }
)

const initialState = {
    departments: []
}

const departmentsSlice = createSlice({
    name: 'departments',
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(fetchDepartments.fulfilled, (state, action) => {
            state.departments = action.payload
        })
    }
})

export const departmentsActions = departmentsSlice.actions
export default departmentsSlice.reducer