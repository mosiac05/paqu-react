import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFaculties = createAsyncThunk(
    'faculties/fetchFacultiesStatus',
    async () => {
        try {
            const response = await fetch(`https://paqu-app-default-rtdb.firebaseio.com/faculties.json`)
            
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