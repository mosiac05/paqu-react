import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../utils/http";

export const fetchQuestionPapers = createAsyncThunk(
    'questionPapers/fetchQuestionPapersStatus',
    async () => {
        const responseData = await fetchData('question_papers')
        return responseData
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