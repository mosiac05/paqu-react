import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchQuestionPapers = createAsyncThunk(
    'questionPapers/fetchQuestionPapersStatus',
    async () => {
        try {
            const response = await fetch(`https://paqu-app-default-rtdb.firebaseio.com/question_papers.json`)
            
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
    questionPapers: []
}

const questionPapersSlice = createSlice({
    name: 'questionPapers',
    initialState,
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(fetchQuestionPapers.fulfilled, (state, action) => {
            state.questionPapers = action.payload
        })
    }
})

export const questionPapersActions = questionPapersSlice.actions
export default questionPapersSlice.reducer