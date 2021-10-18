import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchDepartments = createAsyncThunk(
    'departments/fetchDepartmentsStatus',
    async () => {
        try {
            const response = await fetch(`https://paqu-app-default-rtdb.firebaseio.com/departments.json`)
            
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