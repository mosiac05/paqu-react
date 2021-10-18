import { configureStore } from "@reduxjs/toolkit"
import universitiesReducer from './universities'
import facultiesReducer from "./faculties"
import departmentsReducer from "./departments"
import coursesReducer from './courses'
import questionPapersReducer from './question-papers'

const store = configureStore({
    reducer: { 
        universities: universitiesReducer,
        faculties: facultiesReducer,
        departments: departmentsReducer,
        courses: coursesReducer,
        questionPapers: questionPapersReducer,
     }
})

export default store