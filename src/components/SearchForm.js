import SectionHeader from './UI/SectionHeader'
import './SearchForm.css'
import Card from './UI/Card'
import Section from './UI/Section'
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react'
import { useHistory } from 'react-router'

const SearchForm = () => {
    const history = useHistory()
    const universities = useSelector(state => state.universities.universities)
    const faculties = useSelector(state => state.faculties.faculties)
    const departments = useSelector(state => state.departments.departments)

    const universityInput = useRef()
    const facultyInput = useRef()
    const departmentInput = useRef()

    const [filteredFaculties, setFilteredFaculties] = useState([])
    const [filteredDepartments, setFilteredDepartments] = useState([])
    const [formIsValid, setFormIsValid] = useState(false)

    const universityChangeHandler = (event) => {
        setFilteredDepartments([])
        setFormIsValid(false)
        setFilteredFaculties(faculties.filter(faculty => faculty.universityId.toString() === event.target.value))
    }

    const facultyChangeHandler = (event) => {
        setFilteredDepartments([])
        setFormIsValid(false)
        setFilteredDepartments(departments.filter(department => department.facultyId.toString() === event.target.value))
    }

    const departmentChangeHandler = (event) => {
        console.log(event.target.value);
        if(!event.target.value.trim().includes('department')) {
            setFormIsValid(true)
        } else {
            setFormIsValid(false)
        }
    }

    const submitFormHandler = (event) => {
        event.preventDefault()
        console.log('What?');
        const universityId = universityInput.current.value
        const facultyId = facultyInput.current.value
        const departmentId = departmentInput.current.value

        history.push(`/universities/${universityId}/faculties/${facultyId}/departments/${departmentId}/courses`)
    }

    return (
        <Section>
            <SectionHeader heading='Search For Questions Here' text="Search by university, faculty and department" />
            <Card>
                <form onSubmit={submitFormHandler} className="search-form">
                    <div className="input-group">
                        <label htmlFor="universities">Select University:</label>
                        <select 
                            id="universities" 
                            ref={universityInput} 
                            className="input-item"
                            onChange={universityChangeHandler}
                            defaultValue='disabled'
                        >
                            <option disabled value="disabled">Choose universities...</option>
                            {universities.map((university, index) => (                                
                                <option 
                                    key={'universityOption'+index}
                                    value={university.id}
                                >
                                    {university.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="faculties">Select Faculty:</label>
                        <select 
                            id="faculties" 
                            ref={facultyInput} 
                            className="input-item"
                            onClick={facultyChangeHandler}
                        >
                            <option disabled>Choose faculties...</option>
                            {filteredFaculties.map((faculty, index) => (                                
                                <option 
                                    key={'facultyOption'+index}
                                    value={faculty.id}
                                >
                                    {faculty.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="departments">Select Department:</label>
                        <select 
                            id="departments" 
                            ref={departmentInput} 
                            className="input-item"
                            onClick={departmentChangeHandler}
                        >
                            <option>Choose departments...</option>
                            {filteredDepartments.map((department, index) => (                                
                                <option 
                                    key={'departmentOption'+index}
                                    value={department.id}
                                >
                                    {department.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <button 
                            className={"input-button" + (formIsValid ? '' : ' disabled')}
                            disabled={!formIsValid}
                        >
                            Search Courses
                        </button>
                    </div>
                </form>
            </Card>
        </Section>
    )
}

export default SearchForm