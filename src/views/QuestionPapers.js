import { useState, Fragment, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import Hero from "../components/Hero"
import Breadcrumb from "../components/UI/Breadcrumb"
import Card from "../components/UI/Card"
import { getData } from "../utils"

const QuestionPapers = () => {
    const params = useParams()
    const { universityId, facultyId, departmentId, courseId } = params

    
    const universities = useSelector(state => state.universities.universities)
    const faculties = useSelector(state => state.faculties.faculties)
    const departments = useSelector(state => state.departments.departments)
    const courses = useSelector(state => state.courses.courses)
    const questionPapers = useSelector(state => state.questionPapers.questionPapers)

    const [filteredItems, setFilteredItems] = useState([])
    
    const universityName = getData(universities, 'name', universityId)
    const facultyName = getData(faculties, 'name', facultyId)
    const departmentName = getData(departments, 'name', departmentId)
    const courseName = getData(courses, 'name', courseId)

    useEffect(() => {            
        setFilteredItems(questionPapers.filter(questionPaper => questionPaper.courseId === courseId))
    }, [questionPapers, courseId])

    const filterHandler = (event) => {
        const searchTerm = event.target.value.trim()
        if(searchTerm !== '') {
            const courseQuestionPapers = questionPapers.filter(questionPaper => questionPaper.courseId === courseId)
            const theFiltered = courseQuestionPapers.filter(item => item.name.toLowerCase().includes(searchTerm))
            setFilteredItems(theFiltered)
        } else {
            setFilteredItems(questionPapers.filter(questionPaper => questionPaper.courseId === courseId))
        }
    }

    const downloadFileHandler = (event) => {
        console.log(event.target.dataset.link)
        const downloadLink = event.target.dataset.link
        const fileName = event.target.dataset.fileName

        let element = document.createElement('a')
        element.setAttribute('href', downloadLink)
        element.setAttribute('download', fileName)
        element.setAttribute('target', '_blank')
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    return (
        <Fragment>
            <Hero pageTitle="Question Papers" />
            <Breadcrumb linkList={[
                    { name: universityName, path: `/universities/${universityId}/faculties`}, 
                    { name: facultyName, path: `/universities/${universityId}/faculties/${facultyId}/departments`}, 
                    { name: departmentName, path: `/universities/${universityId}/faculties/${facultyId}/departments/${departmentId}/courses`}, 
                    { name: courseName, path: `/universities/${universityId}/faculties/${facultyId}/departments/${departmentId}/courses/${courseId}/question-papers`}, 
                    { name: 'Question Papers'}
                ]}  
            />
            <Card className="table-list">
                <div className="filter">
                    <input 
                        className="filter-input" 
                        onChange={filterHandler}
                        placeholder="Type here to filter results..." />
                    <button className="filter-clear">{filteredItems.length}</button>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th width="5%">S/N</th>
                            <th>Question Papers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.length > 0 && filteredItems.map((item, index) => {
                            return <tr key={'item'+index}>
                                <td width="5%">{index+1}.</td>
                                <td
                                    onClick={downloadFileHandler} 
                                    id={item.id} 
                                    data-link={item.link}
                                    data-file-name={item.name}
                                >
                                    {item.name}
                                </td>
                            </tr>
                        })}
                        {filteredItems.length < 1 && (
                            <tr>
                                <td colSpan="2" style={{textAlign: 'center'}}>No question papers found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </Card>
        </Fragment>
    )
}

export default QuestionPapers