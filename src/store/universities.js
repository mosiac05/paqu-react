import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUniversities = createAsyncThunk(
    'universities/fetchUniversitiesStatus',
    async () => {
        try {
            const response = await fetch(`https://paqu-app-default-rtdb.firebaseio.com/universities.json`)
            
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